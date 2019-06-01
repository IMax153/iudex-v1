import { readFile, readdir } from 'fs';
import fetch from 'isomorphic-unfetch';
import textversion from 'textversionjs';

interface ConfigOptions {
  version: string;
  template: string;
}

interface Config {
  test?: ConfigOptions;
  production: ConfigOptions;
}

const { SENDGRID_API_KEY } = process.env;
const RELATIVE_PATH_TO_TEMPLATES = './built-templates';
const processArgs = process.argv.slice(2);
const UPDATE_PROD_TEMPLATES = processArgs.some(arg => arg === 'prod');

if (!SENDGRID_API_KEY) {
  throw new Error('❌ Be sure to provide a SendGrid API key');
}

const readdirAsync = (path: string) => {
  return new Promise<string[]>((resolve, reject) => {
    readdir(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
  });
};

const processFile = async (file: string, config: ConfigOptions) => {
  const { version, template } = config;

  const hostname = 'https://api.sendgrid.com/v3';
  const path = `/templates/${template}/versions/${version}`;
  const url = hostname + path;

  const html_content = file;
  const plain_content = textversion(html_content, {
    uIndentionChar: ' ',
    oIndentionChar: ' ',
    listIndentionTabs: 2,
    keepNbsps: true,
    linkProcess: (href, text) => `${text} (${href})`,
  });

  const data = {
    html_content,
    plain_content,
  };

  const options = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${SENDGRID_API_KEY}`,
      'Content-Type': 'application/json; charset=utf-8',
    },
    body: JSON.stringify(data),
  };

  console.info('♻️ Uploading template to SendGrid...');

  try {
    await fetch(url, options)
      .then(res => res.json())
      .then(res => {
        if (res.error) throw new Error(res.error);
        console.info('✅ Saved template on SendGrid');
      })
      .catch(err => {
        console.error({ err });
      });
  } catch (error) {
    throw new Error(error);
  }
};

const processPath = (path: string) => {
  readFile(`${RELATIVE_PATH_TO_TEMPLATES}/${path}`, { encoding: 'utf-8' }, (err, file) => {
    if (err) {
      console.error({ err });
      return;
    }

    const configStart = file.indexOf('START_CONFIG');
    const configEnd = file.indexOf('END_CONFIG');
    const configString = file
      .slice(configStart, configEnd)
      .replace('START_CONFIG', '')
      .replace(/(\r\n\t|\n|\r\t)/gm, '');

    let config: Config;
    try {
      config = JSON.parse(configString);
    } catch (err) {
      console.error({ err, configString, file, configStart, configEnd });
      return;
    }

    if (!UPDATE_PROD_TEMPLATES && !config.test) {
      console.info('🔅 No test config for this template, skipping');
      return;
    }

    const { test: testConfig, production: prodConfig } = config;

    return Promise.all([
      testConfig ? processFile(file, testConfig) : Promise.resolve(),
      UPDATE_PROD_TEMPLATES ? processFile(file, prodConfig) : Promise.resolve(),
    ]);
  });
};

const init = async () => {
  const paths = await readdirAsync(RELATIVE_PATH_TO_TEMPLATES);

  return paths.map(async path => {
    await processPath(path);
  });
};

init();
