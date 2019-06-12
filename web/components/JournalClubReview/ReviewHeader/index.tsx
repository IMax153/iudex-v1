import React from 'react';

import { Stack } from '../../Stack';
import { Text } from '../../Text';

interface Props {
  article: string;
  evaluator: string;
  resident: string;
  preceptor: string;
  createdAt: string;
}

export const ReviewHeader: React.FC<Props> = ({
  article,
  evaluator,
  resident,
  preceptor,
  createdAt,
}) => {
  return (
    <React.Fragment>
      <Stack spacing="extraTight">
        <Text type="secondary">Article Title: {`"${article}"`}</Text>
        <Text type="secondary">
          Authored by <em>{evaluator}</em> for <em>{resident}</em> on{' '}
          {new Date(createdAt).toLocaleDateString()}
        </Text>
        <Text type="secondary">
          Precepted by <em>{preceptor}</em>
        </Text>
      </Stack>
    </React.Fragment>
  );
};
