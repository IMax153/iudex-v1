import { extendType } from 'nexus';

export const MeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (root, args, ctx) => {
        if (ctx.req.user) {
          return ctx.prisma.user({ id: ctx.req.user.id });
        }
        return null;
      },
    });
  },
});
