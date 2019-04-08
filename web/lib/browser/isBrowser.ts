declare global {
  namespace NodeJS {
    interface Process {
      browser?: boolean;
    }
  }
}

export const isBrowser: boolean = Boolean(process.browser);
