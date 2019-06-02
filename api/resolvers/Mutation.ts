import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const Mutation = prismaObjectType({
  name: 'Mutation',
  definition(t) {
    t.prismaFields(['*']);
  },
});
