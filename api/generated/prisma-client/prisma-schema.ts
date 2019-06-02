// Code generated by Prisma (prisma@1.30.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateCoreCompetency {
  count: Int!
}

type AggregateJournalClub {
  count: Int!
}

type AggregateOverallCompetency {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

enum Core {
  NEEDS_IMPROVEMENT
  SATISFACTORY_PROGRESS
  ACHIEVED
  NOT_APPLICABLE
}

type CoreCompetency {
  id: ID!
  competency: Core!
  comment: String
}

type CoreCompetencyConnection {
  pageInfo: PageInfo!
  edges: [CoreCompetencyEdge]!
  aggregate: AggregateCoreCompetency!
}

input CoreCompetencyCreateInput {
  id: ID
  competency: Core!
  comment: String
}

input CoreCompetencyCreateOneInput {
  create: CoreCompetencyCreateInput
  connect: CoreCompetencyWhereUniqueInput
}

type CoreCompetencyEdge {
  node: CoreCompetency!
  cursor: String!
}

enum CoreCompetencyOrderByInput {
  id_ASC
  id_DESC
  competency_ASC
  competency_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type CoreCompetencyPreviousValues {
  id: ID!
  competency: Core!
  comment: String
}

type CoreCompetencySubscriptionPayload {
  mutation: MutationType!
  node: CoreCompetency
  updatedFields: [String!]
  previousValues: CoreCompetencyPreviousValues
}

input CoreCompetencySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CoreCompetencyWhereInput
  AND: [CoreCompetencySubscriptionWhereInput!]
  OR: [CoreCompetencySubscriptionWhereInput!]
  NOT: [CoreCompetencySubscriptionWhereInput!]
}

input CoreCompetencyUpdateDataInput {
  competency: Core
  comment: String
}

input CoreCompetencyUpdateInput {
  competency: Core
  comment: String
}

input CoreCompetencyUpdateManyMutationInput {
  competency: Core
  comment: String
}

input CoreCompetencyUpdateOneRequiredInput {
  create: CoreCompetencyCreateInput
  update: CoreCompetencyUpdateDataInput
  upsert: CoreCompetencyUpsertNestedInput
  connect: CoreCompetencyWhereUniqueInput
}

input CoreCompetencyUpsertNestedInput {
  update: CoreCompetencyUpdateDataInput!
  create: CoreCompetencyCreateInput!
}

input CoreCompetencyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  competency: Core
  competency_not: Core
  competency_in: [Core!]
  competency_not_in: [Core!]
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  AND: [CoreCompetencyWhereInput!]
  OR: [CoreCompetencyWhereInput!]
  NOT: [CoreCompetencyWhereInput!]
}

input CoreCompetencyWhereUniqueInput {
  id: ID
}

scalar DateTime

type JournalClub {
  id: ID!
  article: String!
  resident: User!
  evaluator: User!
  preceptor: User!
  background: CoreCompetency!
  methods: CoreCompetency!
  results: CoreCompetency!
  understanding: CoreCompetency!
  analysis: CoreCompetency!
  application: CoreCompetency!
  conclusions: CoreCompetency!
  clarity: CoreCompetency!
  organization: CoreCompetency!
  grammar: CoreCompetency!
  responseToQuestions: CoreCompetency!
  knowsAudience: CoreCompetency!
  audienceEngagement: CoreCompetency!
  overall: OverallCompetency!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type JournalClubConnection {
  pageInfo: PageInfo!
  edges: [JournalClubEdge]!
  aggregate: AggregateJournalClub!
}

input JournalClubCreateInput {
  id: ID
  article: String!
  resident: UserCreateOneInput!
  evaluator: UserCreateOneInput!
  preceptor: UserCreateOneInput!
  background: CoreCompetencyCreateOneInput!
  methods: CoreCompetencyCreateOneInput!
  results: CoreCompetencyCreateOneInput!
  understanding: CoreCompetencyCreateOneInput!
  analysis: CoreCompetencyCreateOneInput!
  application: CoreCompetencyCreateOneInput!
  conclusions: CoreCompetencyCreateOneInput!
  clarity: CoreCompetencyCreateOneInput!
  organization: CoreCompetencyCreateOneInput!
  grammar: CoreCompetencyCreateOneInput!
  responseToQuestions: CoreCompetencyCreateOneInput!
  knowsAudience: CoreCompetencyCreateOneInput!
  audienceEngagement: CoreCompetencyCreateOneInput!
  overall: OverallCompetencyCreateOneInput!
}

type JournalClubEdge {
  node: JournalClub!
  cursor: String!
}

enum JournalClubOrderByInput {
  id_ASC
  id_DESC
  article_ASC
  article_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type JournalClubPreviousValues {
  id: ID!
  article: String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type JournalClubSubscriptionPayload {
  mutation: MutationType!
  node: JournalClub
  updatedFields: [String!]
  previousValues: JournalClubPreviousValues
}

input JournalClubSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: JournalClubWhereInput
  AND: [JournalClubSubscriptionWhereInput!]
  OR: [JournalClubSubscriptionWhereInput!]
  NOT: [JournalClubSubscriptionWhereInput!]
}

input JournalClubUpdateInput {
  article: String
  resident: UserUpdateOneRequiredInput
  evaluator: UserUpdateOneRequiredInput
  preceptor: UserUpdateOneRequiredInput
  background: CoreCompetencyUpdateOneRequiredInput
  methods: CoreCompetencyUpdateOneRequiredInput
  results: CoreCompetencyUpdateOneRequiredInput
  understanding: CoreCompetencyUpdateOneRequiredInput
  analysis: CoreCompetencyUpdateOneRequiredInput
  application: CoreCompetencyUpdateOneRequiredInput
  conclusions: CoreCompetencyUpdateOneRequiredInput
  clarity: CoreCompetencyUpdateOneRequiredInput
  organization: CoreCompetencyUpdateOneRequiredInput
  grammar: CoreCompetencyUpdateOneRequiredInput
  responseToQuestions: CoreCompetencyUpdateOneRequiredInput
  knowsAudience: CoreCompetencyUpdateOneRequiredInput
  audienceEngagement: CoreCompetencyUpdateOneRequiredInput
  overall: OverallCompetencyUpdateOneRequiredInput
}

input JournalClubUpdateManyMutationInput {
  article: String
}

input JournalClubWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  article: String
  article_not: String
  article_in: [String!]
  article_not_in: [String!]
  article_lt: String
  article_lte: String
  article_gt: String
  article_gte: String
  article_contains: String
  article_not_contains: String
  article_starts_with: String
  article_not_starts_with: String
  article_ends_with: String
  article_not_ends_with: String
  resident: UserWhereInput
  evaluator: UserWhereInput
  preceptor: UserWhereInput
  background: CoreCompetencyWhereInput
  methods: CoreCompetencyWhereInput
  results: CoreCompetencyWhereInput
  understanding: CoreCompetencyWhereInput
  analysis: CoreCompetencyWhereInput
  application: CoreCompetencyWhereInput
  conclusions: CoreCompetencyWhereInput
  clarity: CoreCompetencyWhereInput
  organization: CoreCompetencyWhereInput
  grammar: CoreCompetencyWhereInput
  responseToQuestions: CoreCompetencyWhereInput
  knowsAudience: CoreCompetencyWhereInput
  audienceEngagement: CoreCompetencyWhereInput
  overall: OverallCompetencyWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [JournalClubWhereInput!]
  OR: [JournalClubWhereInput!]
  NOT: [JournalClubWhereInput!]
}

input JournalClubWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createCoreCompetency(data: CoreCompetencyCreateInput!): CoreCompetency!
  updateCoreCompetency(data: CoreCompetencyUpdateInput!, where: CoreCompetencyWhereUniqueInput!): CoreCompetency
  updateManyCoreCompetencies(data: CoreCompetencyUpdateManyMutationInput!, where: CoreCompetencyWhereInput): BatchPayload!
  upsertCoreCompetency(where: CoreCompetencyWhereUniqueInput!, create: CoreCompetencyCreateInput!, update: CoreCompetencyUpdateInput!): CoreCompetency!
  deleteCoreCompetency(where: CoreCompetencyWhereUniqueInput!): CoreCompetency
  deleteManyCoreCompetencies(where: CoreCompetencyWhereInput): BatchPayload!
  createJournalClub(data: JournalClubCreateInput!): JournalClub!
  updateJournalClub(data: JournalClubUpdateInput!, where: JournalClubWhereUniqueInput!): JournalClub
  updateManyJournalClubs(data: JournalClubUpdateManyMutationInput!, where: JournalClubWhereInput): BatchPayload!
  upsertJournalClub(where: JournalClubWhereUniqueInput!, create: JournalClubCreateInput!, update: JournalClubUpdateInput!): JournalClub!
  deleteJournalClub(where: JournalClubWhereUniqueInput!): JournalClub
  deleteManyJournalClubs(where: JournalClubWhereInput): BatchPayload!
  createOverallCompetency(data: OverallCompetencyCreateInput!): OverallCompetency!
  updateOverallCompetency(data: OverallCompetencyUpdateInput!, where: OverallCompetencyWhereUniqueInput!): OverallCompetency
  updateManyOverallCompetencies(data: OverallCompetencyUpdateManyMutationInput!, where: OverallCompetencyWhereInput): BatchPayload!
  upsertOverallCompetency(where: OverallCompetencyWhereUniqueInput!, create: OverallCompetencyCreateInput!, update: OverallCompetencyUpdateInput!): OverallCompetency!
  deleteOverallCompetency(where: OverallCompetencyWhereUniqueInput!): OverallCompetency
  deleteManyOverallCompetencies(where: OverallCompetencyWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

enum Overall {
  MEETS_EXPECTATIONS
  DOES_NOT_MEET_EXPECTATIONS
}

type OverallCompetency {
  id: ID!
  competency: Overall!
  comment: String
}

type OverallCompetencyConnection {
  pageInfo: PageInfo!
  edges: [OverallCompetencyEdge]!
  aggregate: AggregateOverallCompetency!
}

input OverallCompetencyCreateInput {
  id: ID
  competency: Overall!
  comment: String
}

input OverallCompetencyCreateOneInput {
  create: OverallCompetencyCreateInput
  connect: OverallCompetencyWhereUniqueInput
}

type OverallCompetencyEdge {
  node: OverallCompetency!
  cursor: String!
}

enum OverallCompetencyOrderByInput {
  id_ASC
  id_DESC
  competency_ASC
  competency_DESC
  comment_ASC
  comment_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OverallCompetencyPreviousValues {
  id: ID!
  competency: Overall!
  comment: String
}

type OverallCompetencySubscriptionPayload {
  mutation: MutationType!
  node: OverallCompetency
  updatedFields: [String!]
  previousValues: OverallCompetencyPreviousValues
}

input OverallCompetencySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OverallCompetencyWhereInput
  AND: [OverallCompetencySubscriptionWhereInput!]
  OR: [OverallCompetencySubscriptionWhereInput!]
  NOT: [OverallCompetencySubscriptionWhereInput!]
}

input OverallCompetencyUpdateDataInput {
  competency: Overall
  comment: String
}

input OverallCompetencyUpdateInput {
  competency: Overall
  comment: String
}

input OverallCompetencyUpdateManyMutationInput {
  competency: Overall
  comment: String
}

input OverallCompetencyUpdateOneRequiredInput {
  create: OverallCompetencyCreateInput
  update: OverallCompetencyUpdateDataInput
  upsert: OverallCompetencyUpsertNestedInput
  connect: OverallCompetencyWhereUniqueInput
}

input OverallCompetencyUpsertNestedInput {
  update: OverallCompetencyUpdateDataInput!
  create: OverallCompetencyCreateInput!
}

input OverallCompetencyWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  competency: Overall
  competency_not: Overall
  competency_in: [Overall!]
  competency_not_in: [Overall!]
  comment: String
  comment_not: String
  comment_in: [String!]
  comment_not_in: [String!]
  comment_lt: String
  comment_lte: String
  comment_gt: String
  comment_gte: String
  comment_contains: String
  comment_not_contains: String
  comment_starts_with: String
  comment_not_starts_with: String
  comment_ends_with: String
  comment_not_ends_with: String
  AND: [OverallCompetencyWhereInput!]
  OR: [OverallCompetencyWhereInput!]
  NOT: [OverallCompetencyWhereInput!]
}

input OverallCompetencyWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

enum Position {
  PHARMACIST
  RESIDENT
}

type Query {
  coreCompetency(where: CoreCompetencyWhereUniqueInput!): CoreCompetency
  coreCompetencies(where: CoreCompetencyWhereInput, orderBy: CoreCompetencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [CoreCompetency]!
  coreCompetenciesConnection(where: CoreCompetencyWhereInput, orderBy: CoreCompetencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CoreCompetencyConnection!
  journalClub(where: JournalClubWhereUniqueInput!): JournalClub
  journalClubs(where: JournalClubWhereInput, orderBy: JournalClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [JournalClub]!
  journalClubsConnection(where: JournalClubWhereInput, orderBy: JournalClubOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): JournalClubConnection!
  overallCompetency(where: OverallCompetencyWhereUniqueInput!): OverallCompetency
  overallCompetencies(where: OverallCompetencyWhereInput, orderBy: OverallCompetencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OverallCompetency]!
  overallCompetenciesConnection(where: OverallCompetencyWhereInput, orderBy: OverallCompetencyOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OverallCompetencyConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  coreCompetency(where: CoreCompetencySubscriptionWhereInput): CoreCompetencySubscriptionPayload
  journalClub(where: JournalClubSubscriptionWhereInput): JournalClubSubscriptionPayload
  overallCompetency(where: OverallCompetencySubscriptionWhereInput): OverallCompetencySubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  emailConfirmed: Boolean!
  password: String!
  position: Position!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  firstName: String!
  lastName: String!
  email: String!
  emailConfirmed: Boolean
  password: String!
  position: Position!
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  emailConfirmed_ASC
  emailConfirmed_DESC
  password_ASC
  password_DESC
  position_ASC
  position_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  emailConfirmed: Boolean!
  password: String!
  position: Position!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  email: String
  emailConfirmed: Boolean
  password: String
  position: Position
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  emailConfirmed: Boolean
  password: String
  position: Position
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  emailConfirmed: Boolean
  password: String
  position: Position
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  emailConfirmed: Boolean
  emailConfirmed_not: Boolean
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  position: Position
  position_not: Position
  position_in: [Position!]
  position_not_in: [Position!]
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`