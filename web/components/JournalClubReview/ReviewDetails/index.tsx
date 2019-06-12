import React from 'react';

import { CoreCompetency, OverallCompetency } from '../../../generated/graphql';
import { formatCompetency } from '../../../lib/utils';
import { Heading } from '../../Heading';
import { Stack } from '../../Stack';
import { Text } from '../../Text';

interface Props {
  heading: string;
  domain: CoreCompetency | OverallCompetency;
}

export const ReviewDetails: React.FC<Props> = ({ heading, domain }) => {
  return (
    <Stack spacing="compact">
      <Heading type="subtitle" color="attention">
        {heading}
      </Heading>
      <Stack spacing="extraTight">
        <Text type="info">{formatCompetency(domain.competency)}</Text>
        {domain.comment && <Text>{domain.comment}</Text>}
      </Stack>
    </Stack>
  );
};
