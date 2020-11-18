import { IResolvers } from 'graphql-tools';
import {Query} from './generated/graphql'

const resolverMap: IResolvers = {
  Query: {
    helloWorld(_: void, args: void): string {
      return `👋 Hello world! 👋`;
    },
  },
};

export default resolverMap;
