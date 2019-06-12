import { ApolloError } from 'apollo-server-express';
import { arg, mutationField } from 'nexus';

export const ConfirmUserMutation = mutationField('setUserPosition', {
  type: 'User',
  args: { data: arg({ type: 'SetUserPositionInput', nullable: false }) },
  resolve: async (root, { data }, ctx) => {
    const { position } = data;

    try {
      const user = await ctx.prisma.updateUser({
        where: { id: ctx.req.user.id },
        data: { position },
      });

      return user;
    } catch (error) {
      throw new ApolloError('Internal Server Error');
    }
  },
});
