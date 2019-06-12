import { prismaObjectType } from 'nexus-prisma';
import capitalize from 'lodash.capitalize';

// @ts-ignore
export const User = prismaObjectType({
  name: 'User',
  definition(t) {
    t.prismaFields(['*']);

    t.string('fullName', {
      nullable: false,
      resolve({ firstName, lastName }) {
        return `${capitalize(firstName)} ${capitalize(lastName)}`;
      },
    });
  },
});
