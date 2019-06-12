import { prismaObjectType } from 'nexus-prisma';

// @ts-ignore
export const JournalClubConnection = prismaObjectType({
  name: 'JournalClubConnection',
  definition(t) {
    t.prismaFields({ filter: ['aggregate'] });

    t.field('aggregate', {
      ...t.prismaType.aggregate,
      resolve: async (root, args, ctx) => {
        const count = await ctx.prisma
          .journalClubsConnection()
          .aggregate()
          .count();

        return {
          count,
        };
      },
    });
  },
});
