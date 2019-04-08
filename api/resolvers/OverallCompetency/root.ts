import { prismaObjectType } from 'nexus-prisma';

export const OverallCompetency = prismaObjectType({
  name: 'OverallCompetency',
  definition(t) {
    t.prismaFields(['*']);
  },
});
