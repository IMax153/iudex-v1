import { object, string } from 'yup';

const checkCore = {
  is: (c: string | undefined) => c === 'NEEDS_IMPROVEMENT',
  then: string().required('Comment required for Needs Improvement'),
  otherwise: string(),
};

const checkOverall = {
  is: (c: string | undefined) => c === 'DOES_NOT_MEET_EXPECTATIONS',
  then: string().required('Comment required for Does Not Meet Expectations'),
  otherwise: string(),
};

const coreValidator = object().shape({
  competency: string().required('Please select a competency'),
  comment: string().when('competency', checkCore),
});

const overallValidator = object().shape({
  competency: string().required('Please select a competency'),
  comment: string().when('competency', checkOverall),
});

export const validationSchema = object().shape({
  preceptor: string().required('Select the assigned preceptor'),
  resident: string().required('Select the presenting resident'),
  article: string().required('Provide the article title'),
  background: coreValidator,
  methods: coreValidator,
  results: coreValidator,
  understanding: coreValidator,
  analysis: coreValidator,
  application: coreValidator,
  conclusions: coreValidator,
  clarity: coreValidator,
  organization: coreValidator,
  grammar: coreValidator,
  responseToQuestions: coreValidator,
  knowsAudience: coreValidator,
  audienceEngagement: coreValidator,
  overall: overallValidator,
});
