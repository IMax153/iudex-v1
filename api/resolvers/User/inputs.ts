import { inputObjectType } from 'nexus';

export const UserLoginInput = inputObjectType({
  name: 'UserLoginInput',
  definition(t) {
    t.string('email', { required: true });
    t.string('password', { required: true });
  },
});

export const UserRegisterInput = inputObjectType({
  name: 'UserRegisterInput',
  definition(t) {
    t.string('firstName', { required: true });
    t.string('lastName', { required: true });
    t.string('email', { required: true });
    t.string('password', { required: true });
    t.field('position', { type: 'Position', required: true });
  },
});

export const UserConfirmInput = inputObjectType({
  name: 'UserConfirmInput',
  definition(t) {
    t.string('token', { required: true });
  },
});

export const UserChangePasswordInput = inputObjectType({
  name: 'UserChangePasswordInput',
  definition(t) {
    t.string('token', { required: true });
    t.string('password', { required: true });
  },
});

export const UserForgotPasswordInput = inputObjectType({
  name: 'UserForgotPasswordInput',
  definition(t) {
    t.string('email', { required: true });
  },
});
