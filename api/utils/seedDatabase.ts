import faker from 'faker';
import times from 'lodash.times';

import {
  prisma,
  Core,
  CoreCompetencyCreateInput,
  JournalClub,
  User,
  Position,
  OverallCompetencyCreateInput,
  Overall,
} from '../generated/prisma-client';

const positions: Position[] = ['PRECEPTOR', 'RESIDENT'];
const core: Core[] = ['NEEDS_IMPROVEMENT', 'SATISFACTORY_PROGRESS', 'ACHIEVED', 'NOT_APPLICABLE'];
const overall: Overall[] = ['MEETS_EXPECTATIONS', 'DOES_NOT_MEET_EXPECTATIONS'];

function getPosition() {
  return faker.random.arrayElement(positions);
}

function getCore() {
  return faker.random.arrayElement(core);
}

function getOverall() {
  return faker.random.arrayElement(overall);
}

function getComment() {
  return faker.random.arrayElement([faker.lorem.sentence(5), faker.lorem.sentences(3), undefined]);
}

function getRandomUser(users: User[]) {
  return faker.random.arrayElement(users);
}

function getRandomUserByPosition(users: User[], position: Position) {
  return faker.random.arrayElement(users.filter(u => u.position === position));
}

function generateCoreCompetency(): CoreCompetencyCreateInput {
  return {
    competency: getCore(),
    comment: getComment(),
  };
}

function generateOverallCompetency(): OverallCompetencyCreateInput {
  return {
    competency: getOverall(),
    comment: getComment(),
  };
}

function generateUser() {
  return prisma.createUser({
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    position: getPosition(),
  });
}

function generateJournalClub(users: User[]) {
  return prisma.createJournalClub({
    article: faker.company.catchPhrase(),
    resident: { connect: { id: getRandomUserByPosition(users, 'RESIDENT').id } },
    evaluator: { connect: { id: getRandomUser(users).id } },
    preceptor: { connect: { id: getRandomUser(users).id } },
    background: { create: generateCoreCompetency() },
    methods: { create: generateCoreCompetency() },
    results: { create: generateCoreCompetency() },
    understanding: { create: generateCoreCompetency() },
    analysis: { create: generateCoreCompetency() },
    application: { create: generateCoreCompetency() },
    conclusions: { create: generateCoreCompetency() },
    clarity: { create: generateCoreCompetency() },
    organization: { create: generateCoreCompetency() },
    grammar: { create: generateCoreCompetency() },
    responseToQuestions: { create: generateCoreCompetency() },
    knowsAudience: { create: generateCoreCompetency() },
    audienceEngagement: { create: generateCoreCompetency() },
    overall: { create: generateOverallCompetency() },
  });
}

async function dropDatabase(): Promise<void> {
  await prisma.deleteManyJournalClubs();
  await prisma.deleteManyUsers();
}

export async function seedDatabase(records: number) {
  try {
    console.info('Clearing database...');
    await dropDatabase();

    console.info('Seeding users...');
    const users = await Promise.all(times<Promise<User>>(records, () => generateUser()));

    console.info('Seeding journal clubs...');
    await Promise.all(times<Promise<JournalClub>>(records, () => generateJournalClub(users)));
  } catch (error) {
    console.error('There was an error seeding the database!\n');
    console.info(error);
  }
}
