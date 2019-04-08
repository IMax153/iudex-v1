import { extendType } from 'nexus';

export const MeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve(root, args, ctx) {
        if (ctx.req.session && ctx.req.session.userId) {
          return ctx.prisma.user({ id: ctx.req.session.userId });
        }

        return null;
      },
    });
  },
});
