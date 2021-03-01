export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  helloWorld: Scalars['String'];
  getPeople: Array<Person>;
};

export type Group = {
  __typename?: 'Group';
  description: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  firstName: Scalars['String'];
  surname: Scalars['String'];
  age: Scalars['Int'];
  group?: Maybe<Group>;
  secondaryGroup?: Maybe<Group>;
};
