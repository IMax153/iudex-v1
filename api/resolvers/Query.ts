import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const Query = prismaObjectType({
  name: 'Query',
  definition(t) {
    t.prismaFields(['*']);
  },
});
