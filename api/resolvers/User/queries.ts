import { extendType } from 'nexus';
import { Queues } from '../../utils/bull';

export const MeQuery = extendType({
  type: 'Query',
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (root, args, ctx) => {
        return ctx.prisma.user({ id: ctx.req.user.id });
      },
    });

    t.field('testEmail', {
      type: 'String',
      resolve: async (root, args, ctx) => {
        const users = await ctx.prisma.users();
        await Queues.sendEmailValidationEmail.add(users[0]);
        return 'done';
      },
    });
  },
});
