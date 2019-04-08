import { makePrismaSchema } from 'nexus-prisma';
import path from 'path';

import * as types from './resolvers';
import { prisma } from './generated/prisma-client';
import datamodelInfo from './generated/nexus-prisma';

export const schema = makePrismaSchema({
  // Provide all the GraphQL types we've implemented
  types,

  // Configure the interface to Prisma
  prisma: {
    datamodelInfo,
    client: prisma,
  },

  // Specify where Nexus should put the generated files
  outputs: {
    schema: path.join(__dirname, './generated/schema.graphql'),
    typegen: path.join(__dirname, './generated/nexus.ts'),
  },

  // Configure nullability of input arguments: All arguments are non-nullable by default
  nonNullDefaults: {
    input: false,
    output: false,
  },

  // Configure automatic type resolution for the TS representations of the associated types
  typegenAutoConfig: {
    sources: [
      {
        source: path.join(__dirname, './types.ts'),
        alias: 'types',
      },
    ],
    contextType: 'types.Context',
  },
});
