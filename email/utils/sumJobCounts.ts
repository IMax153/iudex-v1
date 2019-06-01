import { JobCounts } from 'bull';

// Helper function to sum job counts
// e.g. [{ completed: 6 }, { active: 2 }] => 8
export const sumJobCounts = (input: JobCounts[], prop: keyof JobCounts) => {
  return input.reduce((sum, item) => sum + item[prop], 0);
};
