// eslint-disable

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Long: any;
};

export type AggregateCoreCompetency = {
  count: Scalars['Int'];
};

export type AggregateJournalClub = {
  count: Scalars['Int'];
};

export type AggregateOverallCompetency = {
  count: Scalars['Int'];
};

export type AggregateUser = {
  count: Scalars['Int'];
};

export type AuthPayload = {
  user: User;
  token: Scalars['String'];
};

export type BatchPayload = {
  count: Scalars['Long'];
};

export enum Core {
  Needs_Improvement = 'NEEDS_IMPROVEMENT',
  Satisfactory_Progress = 'SATISFACTORY_PROGRESS',
  Achieved = 'ACHIEVED',
  Not_Applicable = 'NOT_APPLICABLE',
}

export type CoreCompetency = {
  id: Scalars['ID'];
  competency: Core;
  comment?: Maybe<Scalars['String']>;
};

export type CoreCompetencyConnection = {
  pageInfo: PageInfo;
  edges: Array<CoreCompetencyEdge>;
  aggregate: AggregateCoreCompetency;
};

export type CoreCompetencyCreateInput = {
  competency: Core;
  comment?: Maybe<Scalars['String']>;
};

export type CoreCompetencyCreateOneInput = {
  create?: Maybe<CoreCompetencyCreateInput>;
  connect?: Maybe<CoreCompetencyWhereUniqueInput>;
};

export type CoreCompetencyEdge = {
  node: CoreCompetency;
  cursor: Scalars['String'];
};

export enum CoreCompetencyOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Competency_Asc = 'competency_ASC',
  Competency_Desc = 'competency_DESC',
  Comment_Asc = 'comment_ASC',
  Comment_Desc = 'comment_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type CoreCompetencyUpdateDataInput = {
  competency?: Maybe<Core>;
  comment?: Maybe<Scalars['String']>;
};

export type CoreCompetencyUpdateInput = {
  competency?: Maybe<Core>;
  comment?: Maybe<Scalars['String']>;
};

export type CoreCompetencyUpdateManyMutationInput = {
  competency?: Maybe<Core>;
  comment?: Maybe<Scalars['String']>;
};

export type CoreCompetencyUpdateOneRequiredInput = {
  create?: Maybe<CoreCompetencyCreateInput>;
  update?: Maybe<CoreCompetencyUpdateDataInput>;
  upsert?: Maybe<CoreCompetencyUpsertNestedInput>;
  connect?: Maybe<CoreCompetencyWhereUniqueInput>;
};

export type CoreCompetencyUpsertNestedInput = {
  update: CoreCompetencyUpdateDataInput;
  create: CoreCompetencyCreateInput;
};

export type CoreCompetencyWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  competency?: Maybe<Core>;
  competency_not?: Maybe<Core>;
  competency_in?: Maybe<Array<Core>>;
  competency_not_in?: Maybe<Array<Core>>;
  comment?: Maybe<Scalars['String']>;
  comment_not?: Maybe<Scalars['String']>;
  comment_in?: Maybe<Array<Scalars['String']>>;
  comment_not_in?: Maybe<Array<Scalars['String']>>;
  comment_lt?: Maybe<Scalars['String']>;
  comment_lte?: Maybe<Scalars['String']>;
  comment_gt?: Maybe<Scalars['String']>;
  comment_gte?: Maybe<Scalars['String']>;
  comment_contains?: Maybe<Scalars['String']>;
  comment_not_contains?: Maybe<Scalars['String']>;
  comment_starts_with?: Maybe<Scalars['String']>;
  comment_not_starts_with?: Maybe<Scalars['String']>;
  comment_ends_with?: Maybe<Scalars['String']>;
  comment_not_ends_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<CoreCompetencyWhereInput>>;
  OR?: Maybe<Array<CoreCompetencyWhereInput>>;
  NOT?: Maybe<Array<CoreCompetencyWhereInput>>;
};

export type CoreCompetencyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type JournalClub = {
  id: Scalars['ID'];
  article: Scalars['String'];
  resident: User;
  evaluator: User;
  preceptor: User;
  background: CoreCompetency;
  methods: CoreCompetency;
  results: CoreCompetency;
  understanding: CoreCompetency;
  analysis: CoreCompetency;
  application: CoreCompetency;
  conclusions: CoreCompetency;
  clarity: CoreCompetency;
  organization: CoreCompetency;
  grammar: CoreCompetency;
  responseToQuestions: CoreCompetency;
  knowsAudience: CoreCompetency;
  audienceEngagement: CoreCompetency;
  overall: OverallCompetency;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
};

export type JournalClubConnection = {
  pageInfo: PageInfo;
  edges: Array<JournalClubEdge>;
  aggregate: AggregateJournalClub;
};

export type JournalClubCreateInput = {
  article: Scalars['String'];
  resident: UserCreateOneInput;
  evaluator: UserCreateOneWithoutJournalClubsInput;
  preceptor: UserCreateOneWithoutAssignedJournalClubsInput;
  background: CoreCompetencyCreateOneInput;
  methods: CoreCompetencyCreateOneInput;
  results: CoreCompetencyCreateOneInput;
  understanding: CoreCompetencyCreateOneInput;
  analysis: CoreCompetencyCreateOneInput;
  application: CoreCompetencyCreateOneInput;
  conclusions: CoreCompetencyCreateOneInput;
  clarity: CoreCompetencyCreateOneInput;
  organization: CoreCompetencyCreateOneInput;
  grammar: CoreCompetencyCreateOneInput;
  responseToQuestions: CoreCompetencyCreateOneInput;
  knowsAudience: CoreCompetencyCreateOneInput;
  audienceEngagement: CoreCompetencyCreateOneInput;
  overall: OverallCompetencyCreateOneInput;
};

export type JournalClubCreateManyWithoutEvaluatorInput = {
  create?: Maybe<Array<JournalClubCreateWithoutEvaluatorInput>>;
  connect?: Maybe<Array<JournalClubWhereUniqueInput>>;
};

export type JournalClubCreateManyWithoutPreceptorInput = {
  create?: Maybe<Array<JournalClubCreateWithoutPreceptorInput>>;
  connect?: Maybe<Array<JournalClubWhereUniqueInput>>;
};

export type JournalClubCreateWithoutEvaluatorInput = {
  article: Scalars['String'];
  resident: UserCreateOneInput;
  preceptor: UserCreateOneWithoutAssignedJournalClubsInput;
  background: CoreCompetencyCreateOneInput;
  methods: CoreCompetencyCreateOneInput;
  results: CoreCompetencyCreateOneInput;
  understanding: CoreCompetencyCreateOneInput;
  analysis: CoreCompetencyCreateOneInput;
  application: CoreCompetencyCreateOneInput;
  conclusions: CoreCompetencyCreateOneInput;
  clarity: CoreCompetencyCreateOneInput;
  organization: CoreCompetencyCreateOneInput;
  grammar: CoreCompetencyCreateOneInput;
  responseToQuestions: CoreCompetencyCreateOneInput;
  knowsAudience: CoreCompetencyCreateOneInput;
  audienceEngagement: CoreCompetencyCreateOneInput;
  overall: OverallCompetencyCreateOneInput;
};

export type JournalClubCreateWithoutPreceptorInput = {
  article: Scalars['String'];
  resident: UserCreateOneInput;
  evaluator: UserCreateOneWithoutJournalClubsInput;
  background: CoreCompetencyCreateOneInput;
  methods: CoreCompetencyCreateOneInput;
  results: CoreCompetencyCreateOneInput;
  understanding: CoreCompetencyCreateOneInput;
  analysis: CoreCompetencyCreateOneInput;
  application: CoreCompetencyCreateOneInput;
  conclusions: CoreCompetencyCreateOneInput;
  clarity: CoreCompetencyCreateOneInput;
  organization: CoreCompetencyCreateOneInput;
  grammar: CoreCompetencyCreateOneInput;
  responseToQuestions: CoreCompetencyCreateOneInput;
  knowsAudience: CoreCompetencyCreateOneInput;
  audienceEngagement: CoreCompetencyCreateOneInput;
  overall: OverallCompetencyCreateOneInput;
};

export type JournalClubEdge = {
  node: JournalClub;
  cursor: Scalars['String'];
};

export enum JournalClubOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Article_Asc = 'article_ASC',
  Article_Desc = 'article_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type JournalClubScalarWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['String']>;
  article_not?: Maybe<Scalars['String']>;
  article_in?: Maybe<Array<Scalars['String']>>;
  article_not_in?: Maybe<Array<Scalars['String']>>;
  article_lt?: Maybe<Scalars['String']>;
  article_lte?: Maybe<Scalars['String']>;
  article_gt?: Maybe<Scalars['String']>;
  article_gte?: Maybe<Scalars['String']>;
  article_contains?: Maybe<Scalars['String']>;
  article_not_contains?: Maybe<Scalars['String']>;
  article_starts_with?: Maybe<Scalars['String']>;
  article_not_starts_with?: Maybe<Scalars['String']>;
  article_ends_with?: Maybe<Scalars['String']>;
  article_not_ends_with?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<JournalClubScalarWhereInput>>;
  OR?: Maybe<Array<JournalClubScalarWhereInput>>;
  NOT?: Maybe<Array<JournalClubScalarWhereInput>>;
};

export type JournalClubUpdateInput = {
  article?: Maybe<Scalars['String']>;
  resident?: Maybe<UserUpdateOneRequiredInput>;
  evaluator?: Maybe<UserUpdateOneRequiredWithoutJournalClubsInput>;
  preceptor?: Maybe<UserUpdateOneRequiredWithoutAssignedJournalClubsInput>;
  background?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  methods?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  results?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  understanding?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  analysis?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  application?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  conclusions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  clarity?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  organization?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  grammar?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  responseToQuestions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  knowsAudience?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  audienceEngagement?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  overall?: Maybe<OverallCompetencyUpdateOneRequiredInput>;
};

export type JournalClubUpdateManyDataInput = {
  article?: Maybe<Scalars['String']>;
};

export type JournalClubUpdateManyMutationInput = {
  article?: Maybe<Scalars['String']>;
};

export type JournalClubUpdateManyWithoutEvaluatorInput = {
  create?: Maybe<Array<JournalClubCreateWithoutEvaluatorInput>>;
  delete?: Maybe<Array<JournalClubWhereUniqueInput>>;
  connect?: Maybe<Array<JournalClubWhereUniqueInput>>;
  set?: Maybe<Array<JournalClubWhereUniqueInput>>;
  disconnect?: Maybe<Array<JournalClubWhereUniqueInput>>;
  update?: Maybe<Array<JournalClubUpdateWithWhereUniqueWithoutEvaluatorInput>>;
  upsert?: Maybe<Array<JournalClubUpsertWithWhereUniqueWithoutEvaluatorInput>>;
  deleteMany?: Maybe<Array<JournalClubScalarWhereInput>>;
  updateMany?: Maybe<Array<JournalClubUpdateManyWithWhereNestedInput>>;
};

export type JournalClubUpdateManyWithoutPreceptorInput = {
  create?: Maybe<Array<JournalClubCreateWithoutPreceptorInput>>;
  delete?: Maybe<Array<JournalClubWhereUniqueInput>>;
  connect?: Maybe<Array<JournalClubWhereUniqueInput>>;
  set?: Maybe<Array<JournalClubWhereUniqueInput>>;
  disconnect?: Maybe<Array<JournalClubWhereUniqueInput>>;
  update?: Maybe<Array<JournalClubUpdateWithWhereUniqueWithoutPreceptorInput>>;
  upsert?: Maybe<Array<JournalClubUpsertWithWhereUniqueWithoutPreceptorInput>>;
  deleteMany?: Maybe<Array<JournalClubScalarWhereInput>>;
  updateMany?: Maybe<Array<JournalClubUpdateManyWithWhereNestedInput>>;
};

export type JournalClubUpdateManyWithWhereNestedInput = {
  where: JournalClubScalarWhereInput;
  data: JournalClubUpdateManyDataInput;
};

export type JournalClubUpdateWithoutEvaluatorDataInput = {
  article?: Maybe<Scalars['String']>;
  resident?: Maybe<UserUpdateOneRequiredInput>;
  preceptor?: Maybe<UserUpdateOneRequiredWithoutAssignedJournalClubsInput>;
  background?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  methods?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  results?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  understanding?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  analysis?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  application?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  conclusions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  clarity?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  organization?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  grammar?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  responseToQuestions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  knowsAudience?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  audienceEngagement?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  overall?: Maybe<OverallCompetencyUpdateOneRequiredInput>;
};

export type JournalClubUpdateWithoutPreceptorDataInput = {
  article?: Maybe<Scalars['String']>;
  resident?: Maybe<UserUpdateOneRequiredInput>;
  evaluator?: Maybe<UserUpdateOneRequiredWithoutJournalClubsInput>;
  background?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  methods?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  results?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  understanding?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  analysis?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  application?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  conclusions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  clarity?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  organization?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  grammar?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  responseToQuestions?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  knowsAudience?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  audienceEngagement?: Maybe<CoreCompetencyUpdateOneRequiredInput>;
  overall?: Maybe<OverallCompetencyUpdateOneRequiredInput>;
};

export type JournalClubUpdateWithWhereUniqueWithoutEvaluatorInput = {
  where: JournalClubWhereUniqueInput;
  data: JournalClubUpdateWithoutEvaluatorDataInput;
};

export type JournalClubUpdateWithWhereUniqueWithoutPreceptorInput = {
  where: JournalClubWhereUniqueInput;
  data: JournalClubUpdateWithoutPreceptorDataInput;
};

export type JournalClubUpsertWithWhereUniqueWithoutEvaluatorInput = {
  where: JournalClubWhereUniqueInput;
  update: JournalClubUpdateWithoutEvaluatorDataInput;
  create: JournalClubCreateWithoutEvaluatorInput;
};

export type JournalClubUpsertWithWhereUniqueWithoutPreceptorInput = {
  where: JournalClubWhereUniqueInput;
  update: JournalClubUpdateWithoutPreceptorDataInput;
  create: JournalClubCreateWithoutPreceptorInput;
};

export type JournalClubWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  article?: Maybe<Scalars['String']>;
  article_not?: Maybe<Scalars['String']>;
  article_in?: Maybe<Array<Scalars['String']>>;
  article_not_in?: Maybe<Array<Scalars['String']>>;
  article_lt?: Maybe<Scalars['String']>;
  article_lte?: Maybe<Scalars['String']>;
  article_gt?: Maybe<Scalars['String']>;
  article_gte?: Maybe<Scalars['String']>;
  article_contains?: Maybe<Scalars['String']>;
  article_not_contains?: Maybe<Scalars['String']>;
  article_starts_with?: Maybe<Scalars['String']>;
  article_not_starts_with?: Maybe<Scalars['String']>;
  article_ends_with?: Maybe<Scalars['String']>;
  article_not_ends_with?: Maybe<Scalars['String']>;
  resident?: Maybe<UserWhereInput>;
  evaluator?: Maybe<UserWhereInput>;
  preceptor?: Maybe<UserWhereInput>;
  background?: Maybe<CoreCompetencyWhereInput>;
  methods?: Maybe<CoreCompetencyWhereInput>;
  results?: Maybe<CoreCompetencyWhereInput>;
  understanding?: Maybe<CoreCompetencyWhereInput>;
  analysis?: Maybe<CoreCompetencyWhereInput>;
  application?: Maybe<CoreCompetencyWhereInput>;
  conclusions?: Maybe<CoreCompetencyWhereInput>;
  clarity?: Maybe<CoreCompetencyWhereInput>;
  organization?: Maybe<CoreCompetencyWhereInput>;
  grammar?: Maybe<CoreCompetencyWhereInput>;
  responseToQuestions?: Maybe<CoreCompetencyWhereInput>;
  knowsAudience?: Maybe<CoreCompetencyWhereInput>;
  audienceEngagement?: Maybe<CoreCompetencyWhereInput>;
  overall?: Maybe<OverallCompetencyWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<JournalClubWhereInput>>;
  OR?: Maybe<Array<JournalClubWhereInput>>;
  NOT?: Maybe<Array<JournalClubWhereInput>>;
};

export type JournalClubWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type Mutation = {
  createUser: User;
  updateUser?: Maybe<User>;
  updateManyUsers: BatchPayload;
  upsertUser: User;
  deleteUser?: Maybe<User>;
  deleteManyUsers: BatchPayload;
  createJournalClub: JournalClub;
  updateJournalClub?: Maybe<JournalClub>;
  updateManyJournalClubs: BatchPayload;
  upsertJournalClub: JournalClub;
  deleteJournalClub?: Maybe<JournalClub>;
  deleteManyJournalClubs: BatchPayload;
  createCoreCompetency: CoreCompetency;
  updateCoreCompetency?: Maybe<CoreCompetency>;
  updateManyCoreCompetencies: BatchPayload;
  upsertCoreCompetency: CoreCompetency;
  deleteCoreCompetency?: Maybe<CoreCompetency>;
  deleteManyCoreCompetencies: BatchPayload;
  createOverallCompetency: OverallCompetency;
  updateOverallCompetency?: Maybe<OverallCompetency>;
  updateManyOverallCompetencies: BatchPayload;
  upsertOverallCompetency: OverallCompetency;
  deleteOverallCompetency?: Maybe<OverallCompetency>;
  deleteManyOverallCompetencies: BatchPayload;
  register?: Maybe<AuthPayload>;
  login?: Maybe<AuthPayload>;
  confirmUser?: Maybe<User>;
  changePassword?: Maybe<User>;
  forgotPassword?: Maybe<Scalars['Boolean']>;
};

export type MutationCreateUserArgs = {
  data: UserCreateInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdateManyUsersArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};

export type MutationUpsertUserArgs = {
  where: UserWhereUniqueInput;
  create: UserCreateInput;
  update: UserUpdateInput;
};

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeleteManyUsersArgs = {
  where?: Maybe<UserWhereInput>;
};

export type MutationCreateJournalClubArgs = {
  data: JournalClubCreateInput;
};

export type MutationUpdateJournalClubArgs = {
  data: JournalClubUpdateInput;
  where: JournalClubWhereUniqueInput;
};

export type MutationUpdateManyJournalClubsArgs = {
  data: JournalClubUpdateManyMutationInput;
  where?: Maybe<JournalClubWhereInput>;
};

export type MutationUpsertJournalClubArgs = {
  where: JournalClubWhereUniqueInput;
  create: JournalClubCreateInput;
  update: JournalClubUpdateInput;
};

export type MutationDeleteJournalClubArgs = {
  where: JournalClubWhereUniqueInput;
};

export type MutationDeleteManyJournalClubsArgs = {
  where?: Maybe<JournalClubWhereInput>;
};

export type MutationCreateCoreCompetencyArgs = {
  data: CoreCompetencyCreateInput;
};

export type MutationUpdateCoreCompetencyArgs = {
  data: CoreCompetencyUpdateInput;
  where: CoreCompetencyWhereUniqueInput;
};

export type MutationUpdateManyCoreCompetenciesArgs = {
  data: CoreCompetencyUpdateManyMutationInput;
  where?: Maybe<CoreCompetencyWhereInput>;
};

export type MutationUpsertCoreCompetencyArgs = {
  where: CoreCompetencyWhereUniqueInput;
  create: CoreCompetencyCreateInput;
  update: CoreCompetencyUpdateInput;
};

export type MutationDeleteCoreCompetencyArgs = {
  where: CoreCompetencyWhereUniqueInput;
};

export type MutationDeleteManyCoreCompetenciesArgs = {
  where?: Maybe<CoreCompetencyWhereInput>;
};

export type MutationCreateOverallCompetencyArgs = {
  data: OverallCompetencyCreateInput;
};

export type MutationUpdateOverallCompetencyArgs = {
  data: OverallCompetencyUpdateInput;
  where: OverallCompetencyWhereUniqueInput;
};

export type MutationUpdateManyOverallCompetenciesArgs = {
  data: OverallCompetencyUpdateManyMutationInput;
  where?: Maybe<OverallCompetencyWhereInput>;
};

export type MutationUpsertOverallCompetencyArgs = {
  where: OverallCompetencyWhereUniqueInput;
  create: OverallCompetencyCreateInput;
  update: OverallCompetencyUpdateInput;
};

export type MutationDeleteOverallCompetencyArgs = {
  where: OverallCompetencyWhereUniqueInput;
};

export type MutationDeleteManyOverallCompetenciesArgs = {
  where?: Maybe<OverallCompetencyWhereInput>;
};

export type MutationRegisterArgs = {
  data: UserRegisterInput;
};

export type MutationLoginArgs = {
  data: UserLoginInput;
};

export type MutationConfirmUserArgs = {
  data: UserConfirmInput;
};

export type MutationChangePasswordArgs = {
  data: UserChangePasswordInput;
};

export type MutationForgotPasswordArgs = {
  data: UserForgotPasswordInput;
};

export enum Overall {
  Meets_Expectations = 'MEETS_EXPECTATIONS',
  Does_Not_Meet_Expectations = 'DOES_NOT_MEET_EXPECTATIONS',
}

export type OverallCompetency = {
  id: Scalars['ID'];
  competency: Overall;
  comment?: Maybe<Scalars['String']>;
};

export type OverallCompetencyConnection = {
  pageInfo: PageInfo;
  edges: Array<OverallCompetencyEdge>;
  aggregate: AggregateOverallCompetency;
};

export type OverallCompetencyCreateInput = {
  competency: Overall;
  comment?: Maybe<Scalars['String']>;
};

export type OverallCompetencyCreateOneInput = {
  create?: Maybe<OverallCompetencyCreateInput>;
  connect?: Maybe<OverallCompetencyWhereUniqueInput>;
};

export type OverallCompetencyEdge = {
  node: OverallCompetency;
  cursor: Scalars['String'];
};

export enum OverallCompetencyOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  Competency_Asc = 'competency_ASC',
  Competency_Desc = 'competency_DESC',
  Comment_Asc = 'comment_ASC',
  Comment_Desc = 'comment_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type OverallCompetencyUpdateDataInput = {
  competency?: Maybe<Overall>;
  comment?: Maybe<Scalars['String']>;
};

export type OverallCompetencyUpdateInput = {
  competency?: Maybe<Overall>;
  comment?: Maybe<Scalars['String']>;
};

export type OverallCompetencyUpdateManyMutationInput = {
  competency?: Maybe<Overall>;
  comment?: Maybe<Scalars['String']>;
};

export type OverallCompetencyUpdateOneRequiredInput = {
  create?: Maybe<OverallCompetencyCreateInput>;
  update?: Maybe<OverallCompetencyUpdateDataInput>;
  upsert?: Maybe<OverallCompetencyUpsertNestedInput>;
  connect?: Maybe<OverallCompetencyWhereUniqueInput>;
};

export type OverallCompetencyUpsertNestedInput = {
  update: OverallCompetencyUpdateDataInput;
  create: OverallCompetencyCreateInput;
};

export type OverallCompetencyWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  competency?: Maybe<Overall>;
  competency_not?: Maybe<Overall>;
  competency_in?: Maybe<Array<Overall>>;
  competency_not_in?: Maybe<Array<Overall>>;
  comment?: Maybe<Scalars['String']>;
  comment_not?: Maybe<Scalars['String']>;
  comment_in?: Maybe<Array<Scalars['String']>>;
  comment_not_in?: Maybe<Array<Scalars['String']>>;
  comment_lt?: Maybe<Scalars['String']>;
  comment_lte?: Maybe<Scalars['String']>;
  comment_gt?: Maybe<Scalars['String']>;
  comment_gte?: Maybe<Scalars['String']>;
  comment_contains?: Maybe<Scalars['String']>;
  comment_not_contains?: Maybe<Scalars['String']>;
  comment_starts_with?: Maybe<Scalars['String']>;
  comment_not_starts_with?: Maybe<Scalars['String']>;
  comment_ends_with?: Maybe<Scalars['String']>;
  comment_not_ends_with?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<OverallCompetencyWhereInput>>;
  OR?: Maybe<Array<OverallCompetencyWhereInput>>;
  NOT?: Maybe<Array<OverallCompetencyWhereInput>>;
};

export type OverallCompetencyWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
};

export type PageInfo = {
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  endCursor?: Maybe<Scalars['String']>;
};

export enum Position {
  Pharmacist = 'PHARMACIST',
  Resident = 'RESIDENT',
}

export type Query = {
  user?: Maybe<User>;
  users: Array<User>;
  usersConnection: UserConnection;
  journalClub?: Maybe<JournalClub>;
  journalClubs: Array<JournalClub>;
  journalClubsConnection: JournalClubConnection;
  coreCompetency?: Maybe<CoreCompetency>;
  coreCompetencies: Array<CoreCompetency>;
  coreCompetenciesConnection: CoreCompetencyConnection;
  overallCompetency?: Maybe<OverallCompetency>;
  overallCompetencies: Array<OverallCompetency>;
  overallCompetenciesConnection: OverallCompetencyConnection;
  journalClubsCount?: Maybe<Scalars['Int']>;
  me?: Maybe<User>;
};

export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryUsersArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryUsersConnectionArgs = {
  where?: Maybe<UserWhereInput>;
  orderBy?: Maybe<UserOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryJournalClubArgs = {
  where: JournalClubWhereUniqueInput;
};

export type QueryJournalClubsArgs = {
  where?: Maybe<JournalClubWhereInput>;
  orderBy?: Maybe<JournalClubOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryJournalClubsConnectionArgs = {
  where?: Maybe<JournalClubWhereInput>;
  orderBy?: Maybe<JournalClubOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryCoreCompetencyArgs = {
  where: CoreCompetencyWhereUniqueInput;
};

export type QueryCoreCompetenciesArgs = {
  where?: Maybe<CoreCompetencyWhereInput>;
  orderBy?: Maybe<CoreCompetencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryCoreCompetenciesConnectionArgs = {
  where?: Maybe<CoreCompetencyWhereInput>;
  orderBy?: Maybe<CoreCompetencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryOverallCompetencyArgs = {
  where: OverallCompetencyWhereUniqueInput;
};

export type QueryOverallCompetenciesArgs = {
  where?: Maybe<OverallCompetencyWhereInput>;
  orderBy?: Maybe<OverallCompetencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryOverallCompetenciesConnectionArgs = {
  where?: Maybe<OverallCompetencyWhereInput>;
  orderBy?: Maybe<OverallCompetencyOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type QueryJournalClubsCountArgs = {
  where: JournalClubWhereInput;
};

export type Subscription = {
  user?: Maybe<User>;
};

export type User = {
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  emailConfirmed: Scalars['Boolean'];
  position: Position;
  isOnline: Scalars['Boolean'];
  journalClubs?: Maybe<Array<JournalClub>>;
  assignedJournalClubs?: Maybe<Array<JournalClub>>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
};

export type UserJournalClubsArgs = {
  where?: Maybe<JournalClubWhereInput>;
  orderBy?: Maybe<JournalClubOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserAssignedJournalClubsArgs = {
  where?: Maybe<JournalClubWhereInput>;
  orderBy?: Maybe<JournalClubOrderByInput>;
  skip?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  last?: Maybe<Scalars['Int']>;
};

export type UserChangePasswordInput = {
  token: Scalars['String'];
  password: Scalars['String'];
};

export type UserConfirmInput = {
  token: Scalars['String'];
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  position: Position;
  isOnline?: Maybe<Scalars['Boolean']>;
  journalClubs?: Maybe<JournalClubCreateManyWithoutEvaluatorInput>;
  assignedJournalClubs?: Maybe<JournalClubCreateManyWithoutPreceptorInput>;
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutAssignedJournalClubsInput = {
  create?: Maybe<UserCreateWithoutAssignedJournalClubsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateOneWithoutJournalClubsInput = {
  create?: Maybe<UserCreateWithoutJournalClubsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserCreateWithoutAssignedJournalClubsInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  position: Position;
  isOnline?: Maybe<Scalars['Boolean']>;
  journalClubs?: Maybe<JournalClubCreateManyWithoutEvaluatorInput>;
};

export type UserCreateWithoutJournalClubsInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password: Scalars['String'];
  position: Position;
  isOnline?: Maybe<Scalars['Boolean']>;
  assignedJournalClubs?: Maybe<JournalClubCreateManyWithoutPreceptorInput>;
};

export type UserEdge = {
  node: User;
  cursor: Scalars['String'];
};

export type UserForgotPasswordInput = {
  email: Scalars['String'];
};

export type UserLoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export enum UserOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  FirstName_Asc = 'firstName_ASC',
  FirstName_Desc = 'firstName_DESC',
  LastName_Asc = 'lastName_ASC',
  LastName_Desc = 'lastName_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  EmailConfirmed_Asc = 'emailConfirmed_ASC',
  EmailConfirmed_Desc = 'emailConfirmed_DESC',
  Password_Asc = 'password_ASC',
  Password_Desc = 'password_DESC',
  Position_Asc = 'position_ASC',
  Position_Desc = 'position_DESC',
  IsOnline_Asc = 'isOnline_ASC',
  IsOnline_Desc = 'isOnline_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type UserRegisterInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  position: Position;
};

export type UserUpdateDataInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  isOnline?: Maybe<Scalars['Boolean']>;
  journalClubs?: Maybe<JournalClubUpdateManyWithoutEvaluatorInput>;
  assignedJournalClubs?: Maybe<JournalClubUpdateManyWithoutPreceptorInput>;
};

export type UserUpdateInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  isOnline?: Maybe<Scalars['Boolean']>;
  journalClubs?: Maybe<JournalClubUpdateManyWithoutEvaluatorInput>;
  assignedJournalClubs?: Maybe<JournalClubUpdateManyWithoutPreceptorInput>;
};

export type UserUpdateManyMutationInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  isOnline?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneRequiredWithoutAssignedJournalClubsInput = {
  create?: Maybe<UserCreateWithoutAssignedJournalClubsInput>;
  update?: Maybe<UserUpdateWithoutAssignedJournalClubsDataInput>;
  upsert?: Maybe<UserUpsertWithoutAssignedJournalClubsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateOneRequiredWithoutJournalClubsInput = {
  create?: Maybe<UserCreateWithoutJournalClubsInput>;
  update?: Maybe<UserUpdateWithoutJournalClubsDataInput>;
  upsert?: Maybe<UserUpsertWithoutJournalClubsInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpdateWithoutAssignedJournalClubsDataInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  isOnline?: Maybe<Scalars['Boolean']>;
  journalClubs?: Maybe<JournalClubUpdateManyWithoutEvaluatorInput>;
};

export type UserUpdateWithoutJournalClubsDataInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  isOnline?: Maybe<Scalars['Boolean']>;
  assignedJournalClubs?: Maybe<JournalClubUpdateManyWithoutPreceptorInput>;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
};

export type UserUpsertWithoutAssignedJournalClubsInput = {
  update: UserUpdateWithoutAssignedJournalClubsDataInput;
  create: UserCreateWithoutAssignedJournalClubsInput;
};

export type UserUpsertWithoutJournalClubsInput = {
  update: UserUpdateWithoutJournalClubsDataInput;
  create: UserCreateWithoutJournalClubsInput;
};

export type UserWhereInput = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_contains?: Maybe<Scalars['ID']>;
  id_not_contains?: Maybe<Scalars['ID']>;
  id_starts_with?: Maybe<Scalars['ID']>;
  id_not_starts_with?: Maybe<Scalars['ID']>;
  id_ends_with?: Maybe<Scalars['ID']>;
  id_not_ends_with?: Maybe<Scalars['ID']>;
  firstName?: Maybe<Scalars['String']>;
  firstName_not?: Maybe<Scalars['String']>;
  firstName_in?: Maybe<Array<Scalars['String']>>;
  firstName_not_in?: Maybe<Array<Scalars['String']>>;
  firstName_lt?: Maybe<Scalars['String']>;
  firstName_lte?: Maybe<Scalars['String']>;
  firstName_gt?: Maybe<Scalars['String']>;
  firstName_gte?: Maybe<Scalars['String']>;
  firstName_contains?: Maybe<Scalars['String']>;
  firstName_not_contains?: Maybe<Scalars['String']>;
  firstName_starts_with?: Maybe<Scalars['String']>;
  firstName_not_starts_with?: Maybe<Scalars['String']>;
  firstName_ends_with?: Maybe<Scalars['String']>;
  firstName_not_ends_with?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastName_not?: Maybe<Scalars['String']>;
  lastName_in?: Maybe<Array<Scalars['String']>>;
  lastName_not_in?: Maybe<Array<Scalars['String']>>;
  lastName_lt?: Maybe<Scalars['String']>;
  lastName_lte?: Maybe<Scalars['String']>;
  lastName_gt?: Maybe<Scalars['String']>;
  lastName_gte?: Maybe<Scalars['String']>;
  lastName_contains?: Maybe<Scalars['String']>;
  lastName_not_contains?: Maybe<Scalars['String']>;
  lastName_starts_with?: Maybe<Scalars['String']>;
  lastName_not_starts_with?: Maybe<Scalars['String']>;
  lastName_ends_with?: Maybe<Scalars['String']>;
  lastName_not_ends_with?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Scalars['String']>>;
  email_not_in?: Maybe<Array<Scalars['String']>>;
  email_lt?: Maybe<Scalars['String']>;
  email_lte?: Maybe<Scalars['String']>;
  email_gt?: Maybe<Scalars['String']>;
  email_gte?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  emailConfirmed?: Maybe<Scalars['Boolean']>;
  emailConfirmed_not?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['String']>;
  password_not?: Maybe<Scalars['String']>;
  password_in?: Maybe<Array<Scalars['String']>>;
  password_not_in?: Maybe<Array<Scalars['String']>>;
  password_lt?: Maybe<Scalars['String']>;
  password_lte?: Maybe<Scalars['String']>;
  password_gt?: Maybe<Scalars['String']>;
  password_gte?: Maybe<Scalars['String']>;
  password_contains?: Maybe<Scalars['String']>;
  password_not_contains?: Maybe<Scalars['String']>;
  password_starts_with?: Maybe<Scalars['String']>;
  password_not_starts_with?: Maybe<Scalars['String']>;
  password_ends_with?: Maybe<Scalars['String']>;
  password_not_ends_with?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  position_not?: Maybe<Position>;
  position_in?: Maybe<Array<Position>>;
  position_not_in?: Maybe<Array<Position>>;
  isOnline?: Maybe<Scalars['Boolean']>;
  isOnline_not?: Maybe<Scalars['Boolean']>;
  journalClubs_every?: Maybe<JournalClubWhereInput>;
  journalClubs_some?: Maybe<JournalClubWhereInput>;
  journalClubs_none?: Maybe<JournalClubWhereInput>;
  assignedJournalClubs_every?: Maybe<JournalClubWhereInput>;
  assignedJournalClubs_some?: Maybe<JournalClubWhereInput>;
  assignedJournalClubs_none?: Maybe<JournalClubWhereInput>;
  createdAt?: Maybe<Scalars['DateTime']>;
  createdAt_not?: Maybe<Scalars['DateTime']>;
  createdAt_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  createdAt_lt?: Maybe<Scalars['DateTime']>;
  createdAt_lte?: Maybe<Scalars['DateTime']>;
  createdAt_gt?: Maybe<Scalars['DateTime']>;
  createdAt_gte?: Maybe<Scalars['DateTime']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  updatedAt_not?: Maybe<Scalars['DateTime']>;
  updatedAt_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_not_in?: Maybe<Array<Scalars['DateTime']>>;
  updatedAt_lt?: Maybe<Scalars['DateTime']>;
  updatedAt_lte?: Maybe<Scalars['DateTime']>;
  updatedAt_gt?: Maybe<Scalars['DateTime']>;
  updatedAt_gte?: Maybe<Scalars['DateTime']>;
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
};

export type UserWhereUniqueInput = {
  id?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
};
export type AllJournalClubsQueryVariables = {
  where?: Maybe<JournalClubWhereInput>;
};

export type AllJournalClubsQuery = { __typename?: 'Query' } & {
  journalClubs: Array<{ __typename?: 'JournalClub' } & JournalClubFieldsFragment>;
};

export type JournalClubsQueryVariables = {
  where?: Maybe<JournalClubWhereInput>;
  orderBy?: Maybe<JournalClubOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  after?: Maybe<Scalars['String']>;
  skip?: Maybe<Scalars['Int']>;
};

export type JournalClubsQuery = { __typename?: 'Query' } & {
  journalClubs: Array<
    { __typename?: 'JournalClub' } & Pick<
      JournalClub,
      'id' | 'article' | 'createdAt' | 'updatedAt'
    > & {
        resident: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
        evaluator: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
        preceptor: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
        overall: { __typename?: 'OverallCompetency' } & OverallCompetencyFieldsFragment;
      }
  >;
};

export type JournalClubsCountQueryVariables = {
  where: JournalClubWhereInput;
};

export type JournalClubsCountQuery = { __typename?: 'Query' } & Pick<Query, 'journalClubsCount'>;

export type JournalClubEvaluationQueryVariables = {
  where: JournalClubWhereUniqueInput;
};

export type JournalClubEvaluationQuery = { __typename?: 'Query' } & {
  journalClub: Maybe<{ __typename?: 'JournalClub' } & JournalClubFieldsFragment>;
};

export type CreateJournalClubMutationVariables = {
  data: JournalClubCreateInput;
};

export type CreateJournalClubMutation = { __typename?: 'Mutation' } & {
  createJournalClub: { __typename?: 'JournalClub' } & JournalClubFieldsFragment;
};

export type UsersQueryVariables = {
  where: UserWhereInput;
  orderBy: UserOrderByInput;
};

export type UsersQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'fullName'>>;
};

export type CoreCompetencyFieldsFragment = { __typename?: 'CoreCompetency' } & Pick<
  CoreCompetency,
  'competency' | 'comment'
>;

export type JournalClubFieldsFragment = { __typename?: 'JournalClub' } & Pick<
  JournalClub,
  'article' | 'createdAt' | 'updatedAt'
> & {
    resident: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
    evaluator: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
    preceptor: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
    background: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    methods: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    results: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    understanding: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    analysis: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    application: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    conclusions: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    clarity: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    organization: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    grammar: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    responseToQuestions: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    knowsAudience: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    audienceEngagement: { __typename?: 'CoreCompetency' } & CoreCompetencyFieldsFragment;
    overall: { __typename?: 'OverallCompetency' } & OverallCompetencyFieldsFragment;
  };

export type OverallCompetencyFieldsFragment = { __typename?: 'OverallCompetency' } & Pick<
  OverallCompetency,
  'competency' | 'comment'
>;

export type ChangePasswordMutationVariables = {
  data: UserChangePasswordInput;
};

export type ChangePasswordMutation = { __typename?: 'Mutation' } & {
  changePassword: Maybe<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export type ConfirmUserMutationVariables = {
  data: UserConfirmInput;
};

export type ConfirmUserMutation = { __typename?: 'Mutation' } & {
  confirmUser: Maybe<
    { __typename?: 'User' } & Pick<User, 'id' | 'fullName' | 'email' | 'emailConfirmed'>
  >;
};

export type ForgotPasswordMutationVariables = {
  data: UserForgotPasswordInput;
};

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & Pick<Mutation, 'forgotPassword'>;

export type LoginMutationVariables = {
  data: UserLoginInput;
};

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: Maybe<
    { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
        user: { __typename?: 'User' } & Pick<User, 'id' | 'fullName' | 'email' | 'position'>;
      }
  >;
};

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      'id' | 'fullName' | 'email' | 'position' | 'createdAt' | 'updatedAt'
    >
  >;
};

export type RegisterMutationVariables = {
  data: UserRegisterInput;
};

export type RegisterMutation = { __typename?: 'Mutation' } & {
  register: Maybe<
    { __typename?: 'AuthPayload' } & Pick<AuthPayload, 'token'> & {
        user: { __typename?: 'User' } & Pick<User, 'id' | 'fullName' | 'email' | 'position'>;
      }
  >;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
export const coreCompetencyFieldsFragmentDoc = gql`
  fragment coreCompetencyFields on CoreCompetency {
    competency
    comment
  }
`;
export const overallCompetencyFieldsFragmentDoc = gql`
  fragment overallCompetencyFields on OverallCompetency {
    competency
    comment
  }
`;
export const journalClubFieldsFragmentDoc = gql`
  fragment journalClubFields on JournalClub {
    article
    resident {
      id
      fullName
    }
    evaluator {
      id
      fullName
    }
    preceptor {
      id
      fullName
    }
    background {
      ...coreCompetencyFields
    }
    methods {
      ...coreCompetencyFields
    }
    results {
      ...coreCompetencyFields
    }
    understanding {
      ...coreCompetencyFields
    }
    analysis {
      ...coreCompetencyFields
    }
    application {
      ...coreCompetencyFields
    }
    conclusions {
      ...coreCompetencyFields
    }
    clarity {
      ...coreCompetencyFields
    }
    organization {
      ...coreCompetencyFields
    }
    grammar {
      ...coreCompetencyFields
    }
    responseToQuestions {
      ...coreCompetencyFields
    }
    knowsAudience {
      ...coreCompetencyFields
    }
    audienceEngagement {
      ...coreCompetencyFields
    }
    overall {
      ...overallCompetencyFields
    }
    createdAt
    updatedAt
  }
  ${coreCompetencyFieldsFragmentDoc}
  ${overallCompetencyFieldsFragmentDoc}
`;
export const AllJournalClubsDocument = gql`
  query AllJournalClubs($where: JournalClubWhereInput) {
    journalClubs(where: $where) {
      ...journalClubFields
    }
  }
  ${journalClubFieldsFragmentDoc}
`;

export class AllJournalClubsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<AllJournalClubsQuery, AllJournalClubsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<AllJournalClubsQuery, AllJournalClubsQueryVariables>
        query={AllJournalClubsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type AllJournalClubsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<AllJournalClubsQuery, AllJournalClubsQueryVariables>
> &
  TChildProps;
export function withAllJournalClubs<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AllJournalClubsQuery,
        AllJournalClubsQueryVariables,
        AllJournalClubsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    AllJournalClubsQuery,
    AllJournalClubsQueryVariables,
    AllJournalClubsProps<TChildProps>
  >(AllJournalClubsDocument, operationOptions);
}
export const JournalClubsDocument = gql`
  query JournalClubs(
    $where: JournalClubWhereInput
    $orderBy: JournalClubOrderByInput
    $first: Int
    $after: String
    $skip: Int
  ) {
    journalClubs(where: $where, orderBy: $orderBy, first: $first, after: $after, skip: $skip) {
      id
      article
      createdAt
      updatedAt
      resident {
        id
        fullName
      }
      evaluator {
        id
        fullName
      }
      preceptor {
        id
        fullName
      }
      overall {
        ...overallCompetencyFields
      }
    }
  }
  ${overallCompetencyFieldsFragmentDoc}
`;

export class JournalClubsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<JournalClubsQuery, JournalClubsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<JournalClubsQuery, JournalClubsQueryVariables>
        query={JournalClubsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type JournalClubsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<JournalClubsQuery, JournalClubsQueryVariables>
> &
  TChildProps;
export function withJournalClubs<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JournalClubsQuery,
        JournalClubsQueryVariables,
        JournalClubsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    JournalClubsQuery,
    JournalClubsQueryVariables,
    JournalClubsProps<TChildProps>
  >(JournalClubsDocument, operationOptions);
}
export const JournalClubsCountDocument = gql`
  query JournalClubsCount($where: JournalClubWhereInput!) {
    journalClubsCount(where: $where)
  }
`;

export class JournalClubsCountComponent extends React.Component<
  Partial<ReactApollo.QueryProps<JournalClubsCountQuery, JournalClubsCountQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<JournalClubsCountQuery, JournalClubsCountQueryVariables>
        query={JournalClubsCountDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type JournalClubsCountProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<JournalClubsCountQuery, JournalClubsCountQueryVariables>
> &
  TChildProps;
export function withJournalClubsCount<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JournalClubsCountQuery,
        JournalClubsCountQueryVariables,
        JournalClubsCountProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    JournalClubsCountQuery,
    JournalClubsCountQueryVariables,
    JournalClubsCountProps<TChildProps>
  >(JournalClubsCountDocument, operationOptions);
}
export const JournalClubEvaluationDocument = gql`
  query JournalClubEvaluation($where: JournalClubWhereUniqueInput!) {
    journalClub(where: $where) {
      ...journalClubFields
    }
  }
  ${journalClubFieldsFragmentDoc}
`;

export class JournalClubEvaluationComponent extends React.Component<
  Partial<ReactApollo.QueryProps<JournalClubEvaluationQuery, JournalClubEvaluationQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<JournalClubEvaluationQuery, JournalClubEvaluationQueryVariables>
        query={JournalClubEvaluationDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type JournalClubEvaluationProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<JournalClubEvaluationQuery, JournalClubEvaluationQueryVariables>
> &
  TChildProps;
export function withJournalClubEvaluation<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JournalClubEvaluationQuery,
        JournalClubEvaluationQueryVariables,
        JournalClubEvaluationProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    JournalClubEvaluationQuery,
    JournalClubEvaluationQueryVariables,
    JournalClubEvaluationProps<TChildProps>
  >(JournalClubEvaluationDocument, operationOptions);
}
export const CreateJournalClubDocument = gql`
  mutation CreateJournalClub($data: JournalClubCreateInput!) {
    createJournalClub(data: $data) {
      ...journalClubFields
    }
  }
  ${journalClubFieldsFragmentDoc}
`;

export class CreateJournalClubComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateJournalClubMutation, CreateJournalClubMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateJournalClubMutation, CreateJournalClubMutationVariables>
        mutation={CreateJournalClubDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type CreateJournalClubProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreateJournalClubMutation, CreateJournalClubMutationVariables>
> &
  TChildProps;
export type CreateJournalClubMutationFn = ReactApollo.MutationFn<
  CreateJournalClubMutation,
  CreateJournalClubMutationVariables
>;
export function withCreateJournalClub<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateJournalClubMutation,
        CreateJournalClubMutationVariables,
        CreateJournalClubProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    CreateJournalClubMutation,
    CreateJournalClubMutationVariables,
    CreateJournalClubProps<TChildProps>
  >(CreateJournalClubDocument, operationOptions);
}
export const UsersDocument = gql`
  query Users($where: UserWhereInput!, $orderBy: UserOrderByInput!) {
    users(where: $where, orderBy: $orderBy) {
      id
      fullName
    }
  }
`;

export class UsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<UsersQuery, UsersQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<UsersQuery, UsersQueryVariables>
        query={UsersDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type UsersProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<UsersQuery, UsersQueryVariables>
> &
  TChildProps;
export function withUsers<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, UsersQuery, UsersQueryVariables, UsersProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.withQuery<TProps, UsersQuery, UsersQueryVariables, UsersProps<TChildProps>>(
    UsersDocument,
    operationOptions,
  );
}
export const ChangePasswordDocument = gql`
  mutation ChangePassword($data: UserChangePasswordInput!) {
    changePassword(data: $data) {
      id
    }
  }
`;

export class ChangePasswordComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables>
        mutation={ChangePasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ChangePasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordMutationVariables>
> &
  TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export function withChangePassword<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ChangePasswordMutation,
        ChangePasswordMutationVariables,
        ChangePasswordProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    ChangePasswordMutation,
    ChangePasswordMutationVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, operationOptions);
}
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($data: UserConfirmInput!) {
    confirmUser(data: $data) {
      id
      fullName
      email
      emailConfirmed
    }
  }
`;

export class ConfirmUserComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserMutationVariables>
        mutation={ConfirmUserDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ConfirmUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserMutationVariables>
> &
  TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserMutationVariables
>;
export function withConfirmUser<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmUserMutation,
        ConfirmUserMutationVariables,
        ConfirmUserProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    ConfirmUserMutation,
    ConfirmUserMutationVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, operationOptions);
}
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($data: UserForgotPasswordInput!) {
    forgotPassword(data: $data)
  }
`;

export class ForgotPasswordComponent extends React.Component<
  Partial<ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>
        mutation={ForgotPasswordDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ForgotPasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordMutationVariables>
> &
  TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export function withForgotPassword<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ForgotPasswordMutation,
        ForgotPasswordMutationVariables,
        ForgotPasswordProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($data: UserLoginInput!) {
    login(data: $data) {
      user {
        id
        fullName
        email
        position
      }
      token
    }
  }
`;

export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
        mutation={LoginDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<LoginMutation, LoginMutationVariables>;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginMutationVariables,
        LoginProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      id
      fullName
      email
      position
      createdAt
      updatedAt
    }
  }
`;

export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeQueryVariables>
        query={MeDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type MeProps<TChildProps = {}> = Partial<ReactApollo.DataProps<MeQuery, MeQueryVariables>> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>
    | undefined,
) {
  return ReactApollo.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>(
    MeDocument,
    operationOptions,
  );
}
export const RegisterDocument = gql`
  mutation Register($data: UserRegisterInput!) {
    register(data: $data) {
      user {
        id
        fullName
        email
        position
      }
      token
    }
  }
`;

export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterMutationVariables>
        mutation={RegisterDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterMutationVariables
>;
export function withRegister<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterMutationVariables,
        RegisterProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
