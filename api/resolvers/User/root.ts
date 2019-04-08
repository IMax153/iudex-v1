import { prismaObjectType } from 'nexus-prisma';
import capitalize from 'lodash.capitalize';

export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields({ filter: ['password'] });

    t.string('fullName', {
      nullable: false,
      resolve({ firstName, lastName }) {
        return `${capitalize(firstName)} ${capitalize(lastName)}`;
      },
    });
  },
});
