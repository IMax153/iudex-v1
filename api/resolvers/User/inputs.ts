import { inputObjectType } from 'nexus';

export const SetUserPositionInput = inputObjectType({
  name: 'SetUserPositionInput',
  definition(t) {
    t.field('position', { type: 'Position', nullable: false });
  },
});
