/* eslint-disable */

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
  id?: Maybe<Scalars['ID']>;
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
  id?: Maybe<Scalars['ID']>;
  article: Scalars['String'];
  resident: UserCreateOneInput;
  evaluator: UserCreateOneInput;
  preceptor: UserCreateOneInput;
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

export type JournalClubUpdateInput = {
  article?: Maybe<Scalars['String']>;
  resident?: Maybe<UserUpdateOneRequiredInput>;
  evaluator?: Maybe<UserUpdateOneRequiredInput>;
  preceptor?: Maybe<UserUpdateOneRequiredInput>;
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

export type JournalClubUpdateManyMutationInput = {
  article?: Maybe<Scalars['String']>;
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
  setUserPosition?: Maybe<User>;
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

export type MutationSetUserPositionArgs = {
  data: SetUserPositionInput;
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
  id?: Maybe<Scalars['ID']>;
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
  Preceptor = 'PRECEPTOR',
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

export type SetUserPositionInput = {
  position: Position;
};

export type User = {
  id: Scalars['ID'];
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  position?: Maybe<Position>;
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  fullName: Scalars['String'];
};

export type UserConnection = {
  pageInfo: PageInfo;
  edges: Array<UserEdge>;
  aggregate: AggregateUser;
};

export type UserCreateInput = {
  id?: Maybe<Scalars['ID']>;
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  position?: Maybe<Position>;
};

export type UserCreateOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserEdge = {
  node: User;
  cursor: Scalars['String'];
};

export enum UserOrderByInput {
  Id_Asc = 'id_ASC',
  Id_Desc = 'id_DESC',
  FacebookProviderId_Asc = 'facebookProviderId_ASC',
  FacebookProviderId_Desc = 'facebookProviderId_DESC',
  GoogleProviderId_Asc = 'googleProviderId_ASC',
  GoogleProviderId_Desc = 'googleProviderId_DESC',
  TwitterProviderId_Asc = 'twitterProviderId_ASC',
  TwitterProviderId_Desc = 'twitterProviderId_DESC',
  FirstName_Asc = 'firstName_ASC',
  FirstName_Desc = 'firstName_DESC',
  LastName_Asc = 'lastName_ASC',
  LastName_Desc = 'lastName_DESC',
  Email_Asc = 'email_ASC',
  Email_Desc = 'email_DESC',
  Position_Asc = 'position_ASC',
  Position_Desc = 'position_DESC',
  CreatedAt_Asc = 'createdAt_ASC',
  CreatedAt_Desc = 'createdAt_DESC',
  UpdatedAt_Asc = 'updatedAt_ASC',
  UpdatedAt_Desc = 'updatedAt_DESC',
}

export type UserUpdateDataInput = {
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
};

export type UserUpdateInput = {
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
};

export type UserUpdateManyMutationInput = {
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
};

export type UserUpdateOneRequiredInput = {
  create?: Maybe<UserCreateInput>;
  update?: Maybe<UserUpdateDataInput>;
  upsert?: Maybe<UserUpsertNestedInput>;
  connect?: Maybe<UserWhereUniqueInput>;
};

export type UserUpsertNestedInput = {
  update: UserUpdateDataInput;
  create: UserCreateInput;
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
  facebookProviderId?: Maybe<Scalars['String']>;
  facebookProviderId_not?: Maybe<Scalars['String']>;
  facebookProviderId_in?: Maybe<Array<Scalars['String']>>;
  facebookProviderId_not_in?: Maybe<Array<Scalars['String']>>;
  facebookProviderId_lt?: Maybe<Scalars['String']>;
  facebookProviderId_lte?: Maybe<Scalars['String']>;
  facebookProviderId_gt?: Maybe<Scalars['String']>;
  facebookProviderId_gte?: Maybe<Scalars['String']>;
  facebookProviderId_contains?: Maybe<Scalars['String']>;
  facebookProviderId_not_contains?: Maybe<Scalars['String']>;
  facebookProviderId_starts_with?: Maybe<Scalars['String']>;
  facebookProviderId_not_starts_with?: Maybe<Scalars['String']>;
  facebookProviderId_ends_with?: Maybe<Scalars['String']>;
  facebookProviderId_not_ends_with?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  googleProviderId_not?: Maybe<Scalars['String']>;
  googleProviderId_in?: Maybe<Array<Scalars['String']>>;
  googleProviderId_not_in?: Maybe<Array<Scalars['String']>>;
  googleProviderId_lt?: Maybe<Scalars['String']>;
  googleProviderId_lte?: Maybe<Scalars['String']>;
  googleProviderId_gt?: Maybe<Scalars['String']>;
  googleProviderId_gte?: Maybe<Scalars['String']>;
  googleProviderId_contains?: Maybe<Scalars['String']>;
  googleProviderId_not_contains?: Maybe<Scalars['String']>;
  googleProviderId_starts_with?: Maybe<Scalars['String']>;
  googleProviderId_not_starts_with?: Maybe<Scalars['String']>;
  googleProviderId_ends_with?: Maybe<Scalars['String']>;
  googleProviderId_not_ends_with?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  twitterProviderId_not?: Maybe<Scalars['String']>;
  twitterProviderId_in?: Maybe<Array<Scalars['String']>>;
  twitterProviderId_not_in?: Maybe<Array<Scalars['String']>>;
  twitterProviderId_lt?: Maybe<Scalars['String']>;
  twitterProviderId_lte?: Maybe<Scalars['String']>;
  twitterProviderId_gt?: Maybe<Scalars['String']>;
  twitterProviderId_gte?: Maybe<Scalars['String']>;
  twitterProviderId_contains?: Maybe<Scalars['String']>;
  twitterProviderId_not_contains?: Maybe<Scalars['String']>;
  twitterProviderId_starts_with?: Maybe<Scalars['String']>;
  twitterProviderId_not_starts_with?: Maybe<Scalars['String']>;
  twitterProviderId_ends_with?: Maybe<Scalars['String']>;
  twitterProviderId_not_ends_with?: Maybe<Scalars['String']>;
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
  position?: Maybe<Position>;
  position_not?: Maybe<Position>;
  position_in?: Maybe<Array<Position>>;
  position_not_in?: Maybe<Array<Position>>;
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
  facebookProviderId?: Maybe<Scalars['String']>;
  googleProviderId?: Maybe<Scalars['String']>;
  twitterProviderId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
};
export type PreceptorsQueryVariables = {};

export type PreceptorsQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'fullName'>>;
};

export type ResidentsQueryVariables = {};

export type ResidentsQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'fullName'>>;
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
  journalClubsConnection: { __typename?: 'JournalClubConnection' } & {
    aggregate: { __typename?: 'AggregateJournalClub' } & Pick<AggregateJournalClub, 'count'>;
    pageInfo: { __typename?: 'PageInfo' } & Pick<PageInfo, 'endCursor' | 'hasNextPage'>;
    edges: Array<
      { __typename?: 'JournalClubEdge' } & {
        node: { __typename?: 'JournalClub' } & Pick<
          JournalClub,
          'id' | 'article' | 'createdAt' | 'updatedAt'
        > & {
            resident: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
            evaluator: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
            preceptor: { __typename?: 'User' } & Pick<User, 'id' | 'fullName'>;
            overall: { __typename?: 'OverallCompetency' } & Pick<
              OverallCompetency,
              'comment' | 'competency'
            >;
          };
      }
    >;
  };
};

export type JournalClubQueryVariables = {
  where: JournalClubWhereUniqueInput;
};

export type JournalClubQuery = { __typename?: 'Query' } & {
  journalClub: Maybe<{ __typename?: 'JournalClub' } & JournalClubFieldsFragment>;
};

export type CreateJournalClubMutationVariables = {
  data: JournalClubCreateInput;
};

export type CreateJournalClubMutation = { __typename?: 'Mutation' } & {
  createJournalClub: { __typename?: 'JournalClub' } & Pick<JournalClub, 'id'> &
    JournalClubFieldsFragment;
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

export type UserFieldsFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'fullName' | 'firstName' | 'lastName' | 'email' | 'position' | 'createdAt' | 'updatedAt'
>;

export type MeQueryVariables = {};

export type MeQuery = { __typename?: 'Query' } & {
  me: Maybe<{ __typename?: 'User' } & UserFieldsFragment>;
};

export type SetUserPositionMutationVariables = {
  data: SetUserPositionInput;
};

export type SetUserPositionMutation = { __typename?: 'Mutation' } & {
  setUserPosition: Maybe<{ __typename?: 'User' } & UserFieldsFragment>;
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
export const userFieldsFragmentDoc = gql`
  fragment userFields on User {
    id
    fullName
    firstName
    lastName
    email
    position
    createdAt
    updatedAt
  }
`;
export const PreceptorsDocument = gql`
  query Preceptors {
    users(where: { position: PRECEPTOR }, orderBy: lastName_ASC) {
      id
      fullName
    }
  }
`;

export class PreceptorsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<PreceptorsQuery, PreceptorsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<PreceptorsQuery, PreceptorsQueryVariables>
        query={PreceptorsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type PreceptorsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<PreceptorsQuery, PreceptorsQueryVariables>
> &
  TChildProps;
export function withPreceptors<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        PreceptorsQuery,
        PreceptorsQueryVariables,
        PreceptorsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    PreceptorsQuery,
    PreceptorsQueryVariables,
    PreceptorsProps<TChildProps>
  >(PreceptorsDocument, operationOptions);
}
export const ResidentsDocument = gql`
  query Residents {
    users(where: { position: RESIDENT }, orderBy: lastName_ASC) {
      id
      fullName
    }
  }
`;

export class ResidentsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<ResidentsQuery, ResidentsQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<ResidentsQuery, ResidentsQueryVariables>
        query={ResidentsDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type ResidentsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<ResidentsQuery, ResidentsQueryVariables>
> &
  TChildProps;
export function withResidents<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ResidentsQuery,
        ResidentsQueryVariables,
        ResidentsProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    ResidentsQuery,
    ResidentsQueryVariables,
    ResidentsProps<TChildProps>
  >(ResidentsDocument, operationOptions);
}
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
    journalClubsConnection(
      where: $where
      orderBy: $orderBy
      first: $first
      after: $after
      skip: $skip
    ) {
      aggregate {
        count
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        node {
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
            comment
            competency
          }
        }
      }
    }
  }
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
export const JournalClubDocument = gql`
  query JournalClub($where: JournalClubWhereUniqueInput!) {
    journalClub(where: $where) {
      ...journalClubFields
    }
  }
  ${journalClubFieldsFragmentDoc}
`;

export class JournalClubComponent extends React.Component<
  Partial<ReactApollo.QueryProps<JournalClubQuery, JournalClubQueryVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<JournalClubQuery, JournalClubQueryVariables>
        query={JournalClubDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type JournalClubProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<JournalClubQuery, JournalClubQueryVariables>
> &
  TChildProps;
export function withJournalClub<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        JournalClubQuery,
        JournalClubQueryVariables,
        JournalClubProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withQuery<
    TProps,
    JournalClubQuery,
    JournalClubQueryVariables,
    JournalClubProps<TChildProps>
  >(JournalClubDocument, operationOptions);
}
export const CreateJournalClubDocument = gql`
  mutation CreateJournalClub($data: JournalClubCreateInput!) {
    createJournalClub(data: $data) {
      id
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
export const MeDocument = gql`
  query Me {
    me {
      ...userFields
    }
  }
  ${userFieldsFragmentDoc}
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
export const SetUserPositionDocument = gql`
  mutation SetUserPosition($data: SetUserPositionInput!) {
    setUserPosition(data: $data) {
      ...userFields
    }
  }
  ${userFieldsFragmentDoc}
`;

export class SetUserPositionComponent extends React.Component<
  Partial<ReactApollo.MutationProps<SetUserPositionMutation, SetUserPositionMutationVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<SetUserPositionMutation, SetUserPositionMutationVariables>
        mutation={SetUserPositionDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type SetUserPositionProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SetUserPositionMutation, SetUserPositionMutationVariables>
> &
  TChildProps;
export type SetUserPositionMutationFn = ReactApollo.MutationFn<
  SetUserPositionMutation,
  SetUserPositionMutationVariables
>;
export function withSetUserPosition<TProps, TChildProps = {}>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        SetUserPositionMutation,
        SetUserPositionMutationVariables,
        SetUserPositionProps<TChildProps>
      >
    | undefined,
) {
  return ReactApollo.withMutation<
    TProps,
    SetUserPositionMutation,
    SetUserPositionMutationVariables,
    SetUserPositionProps<TChildProps>
  >(SetUserPositionDocument, operationOptions);
}
