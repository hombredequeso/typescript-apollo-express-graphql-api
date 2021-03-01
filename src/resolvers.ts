import { IResolvers } from 'graphql-tools';
import {Query, Person, Group} from './generated/graphql'

type PersonR = {
  firstName: string;
  surname: string;
  age: number
  group: number
  secondaryGroup: number
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

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
    getPeople(_: void, args: void): PersonR[] {
      return people;
    }
  },
  Group: {
    description(parent:number, args: void, context): string {
      return `Group desc: ${JSON.stringify(parent)}`;
    },

  }
};

export default resolverMap;
