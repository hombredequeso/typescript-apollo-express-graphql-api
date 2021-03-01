import { IResolvers } from 'graphql-tools';
import {Query, Person, Group, Job, Maybe} from './generated/graphql'

type PersonR = {
  firstName: string;
  surname: string;
  age: number
  group: number
  secondaryGroup: number
}

type JobSearchDs = {
    id: string;
    description: string;
}


const people: PersonR[] = [
  {
    firstName: "bob",
    surname: "smith",
    age: 123,
    group: 999,
    secondaryGroup: 111
  }

];

const jobDataSource1: JobSearchDs[] = [
  {
    id: "1",
    description: "ds1.job1"
 },
  {
    id: "1",
    description: "ds1.job2"
 },
];

const jobDataSource2: Job[] = [
  {
    id: "1",
    description: "ds2.job1",
    description2: "desc2.1"
 },
  {
    id: "2",
    description: "ds2.job2",
    description2: "desc2.2"
 },
];

const toMaybe = <T>(x: T|null|undefined) : Maybe<T> => {
  if (x === null)
  return null;
  if (x === undefined)
  return null;
  return x;
}


const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
    getPeople(_: void, args: void): PersonR[] {
      return people;
    },
    getJob(_: void, args: any): Maybe<Job> {
      return toMaybe(jobDataSource2.find(x => x.id === args.id));
    },
    getJobs(): Job[] {
      return jobDataSource1 as Job[];
    }
  },
  Group: {
    description(parent:number, args: void, context): string {
      return `Group desc: ${JSON.stringify(parent)}`;
    },
  },
  Job: {
    description2(parent:any, args: void, context): string {
      return `Job.description2: ${JSON.stringify(parent)}`;
    },
  }
};

export default resolverMap;
