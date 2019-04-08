import { prismaObjectType } from 'nexus-prisma';

export const CoreCompetency = prismaObjectType({
  name: 'CoreCompetency',
  definition(t) {
    t.prismaFields(['*']);
  },
});
