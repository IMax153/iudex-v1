import { prismaObjectType } from 'nexus-prisma';

export const JournalClub = prismaObjectType({
  name: 'JournalClub',
  definition(t) {
    t.prismaFields(['*']);
  },
});
