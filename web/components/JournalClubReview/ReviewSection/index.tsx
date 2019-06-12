import React from 'react';

import { JournalClub } from '../../../generated/graphql';
import { formatCompetencyKey } from '../../../lib/utils';
import { Grid } from '../../Grid';
import { Heading } from '../../Heading';
import { ReviewDetails } from '../ReviewDetails';
import { Separator } from '../../Separator';

interface Props {
  heading: string;
  domains: Partial<JournalClub>;
}

function getKeys<T extends object>(obj: T, ...omit: (keyof T)[]) {
  if (omit.length > 0) {
    const copy = obj;
    omit.forEach(value => delete copy[value]);
    return Object.keys(copy) as (keyof T)[];
  }
  return Object.keys(obj) as (keyof T)[];
}

export const ReviewSection: React.FC<Props> = ({ heading, domains }) => {
  const domainKeys = getKeys(domains);

  return (
    <React.Fragment>
      <Heading type="title2">{heading}</Heading>
      <Separator spaceAfter="medium" />
      <Grid columns="repeat(2, 1fr)" columnGap="10px" rowGap="30px">
        {domainKeys.map(domain => (
          <ReviewDetails
            key={`ReviewDetails:${domain}`}
            heading={formatCompetencyKey(domain)}
            domain={domains[domain]}
          />
        ))}
      </Grid>
    </React.Fragment>
  );
};
