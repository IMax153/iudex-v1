import { objectType } from 'nexus';

export const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.field('user', { type: 'User', nullable: false });
    t.string('token', { nullable: false });
  },
});
