import { prismaObjectType } from 'nexus-prisma';

export const JournalClubConnection = prismaObjectType({
  name: 'JournalClubConnection',
  definition(t) {
    t.prismaFields(['*']);
  },
});
