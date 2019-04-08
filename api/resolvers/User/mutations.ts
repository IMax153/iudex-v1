import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
  UserInputError,
} from 'apollo-server-express';
import { compare, hash } from 'bcryptjs';
import { arg, mutationField } from 'nexus';

import * as Email from '../../utils/email';
import { redis, CONFIRM_USER_PREFIX, FORGOT_PASSWORD_PREFIX } from '../../utils/redis';

export const RegisterMutation = mutationField('register', {
  type: 'User',
  args: { data: arg({ type: 'UserRegisterInput', required: true }) },
  resolve: async (root, { data }, ctx) => {
    const hashedPassword = await hash(data.password, 12);

    const user = await ctx.prisma.createUser({ ...data, password: hashedPassword });

    if (!user) throw new ApolloError('There was a problem with registration - please try again');

    const options = {
      to: data.email,
      url: await Email.createConfirmEmailUrl(user.id),
      locals: {
        subject: 'Iudex - Confirm Email',
        message: 'confirm your email',
      },
    };

    try {
      await Email.sendEmail(options);
    } catch (error) {
      throw new ApolloError('Internal Server Error');
    }

    return user;
  },
});

export const LoginMutation = mutationField('login', {
  type: 'User',
  args: { data: arg({ type: 'UserLoginInput', required: true }) },
  resolve: async (root, { data: { email, password } }, ctx) => {
    const user = await ctx.prisma.user({ email });

    if (!user) throw new UserInputError(`Unable to find user with email ${email}`);

    const isValidPassword = await compare(password, user.password);

    if (!isValidPassword) throw new AuthenticationError('Invalid password');
    if (!user.emailConfirmed) throw new ForbiddenError('You must confirm your email');
    if (!ctx.req.session) throw new ApolloError('Internal Server Error');

    ctx.req.session.userId = user.id;

    return user;
  },
});

export const LogoutMutation = mutationField('logout', {
  type: 'Boolean',
  resolve: (root, args, ctx) => {
    return new Promise((resolve, reject) => {
      if (ctx.req.session) {
        ctx.req.session.destroy((err: any) => {
          if (err) {
            console.log(err);
            throw new ApolloError('There was a problem logging out - please try again');
          }

          ctx.res.clearCookie('qid');
          resolve(true);
        });
      }
    });
  },
});

export const ConfirmUserMutation = mutationField('confirmUser', {
  type: 'User',
  args: { data: arg({ type: 'UserConfirmInput', required: true }) },
  resolve: async (root, { data }, ctx) => {
    const id = await redis.get(`${CONFIRM_USER_PREFIX}${data.token}`);

    if (!id) throw new ApolloError('Unable to process request');

    const user = await ctx.prisma.updateUser({ where: { id }, data: { emailConfirmed: true } });
    await redis.del(data.token);

    return user;
  },
});

export const ChangePasswordMutation = mutationField('changePassword', {
  type: 'User',
  args: { data: arg({ type: 'UserChangePasswordInput', required: true }) },
  resolve: async (root, { data }, ctx) => {
    const id = await redis.get(`${FORGOT_PASSWORD_PREFIX}${data.token}`);

    if (!id) throw new ApolloError('Unable to process request');

    const hashedPassword = await hash(data.password, 12);

    const user = await ctx.prisma.updateUser({ where: { id }, data: { password: hashedPassword } });

    if (!user) throw new ApolloError('Internal Server Error');

    await redis.del(`${FORGOT_PASSWORD_PREFIX}${data.token}`);

    return user;
  },
});

export const ForgotPasswordMutation = mutationField('forgotPassword', {
  type: 'Boolean',
  args: { data: arg({ type: 'UserForgotPasswordInput', required: true }) },
  resolve: async (root, { data }, ctx) => {
    const user = await ctx.prisma.user({ email: data.email });

    if (!user) throw new UserInputError(`No user with the email ${data.email} exists`);

    const options = {
      to: data.email,
      url: await Email.createChangePasswordUrl(user.id),
      locals: {
        subject: 'Iudex - Forgot Password',
        message: 'change your password',
      },
    };

    try {
      await Email.sendEmail(options);
      return true;
    } catch (error) {
      throw new ApolloError('Internal Server Error');
    }
  },
});
