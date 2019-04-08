import { subscriptionField } from 'nexus';

import { prisma } from '../../generated/prisma-client';

export const UserSubscription = subscriptionField('user', {
  type: 'User',
  subscribe: (root, args, ctx) => {
    return prisma.$subscribe.user({ mutation_in: ['CREATED', 'UPDATED', 'DELETED'] }).node();
  },
  resolve: payload => payload,
});
