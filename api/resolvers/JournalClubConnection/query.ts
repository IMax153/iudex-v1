import { arg, extendType } from 'nexus';

export const JournalClubsCount = extendType({
  type: 'Query',
  definition(t) {
    t.field('journalClubsCount', {
      type: 'Int',
      args: { where: arg({ type: 'JournalClubWhereInput', nullable: false }) },
      resolve: async (root, { where }, ctx) => {
        const count = await ctx.prisma
          // @ts-ignore
          .journalClubsConnection({ where })
          .aggregate()
          .count();

        console.log(count);

        return count;
      },
    });
  },
});
