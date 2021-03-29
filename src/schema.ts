import gql from "graphql-tag";

const schema = gql`

  type Query {
    helloWorld: String!
    getPeople: [Person!]!
    getJob(id: String): Job
    getJobs: [Job!]!
  }

  type Subscription {
    bigEvent: BigEvent
  }

  type BigEvent {
    id: String!
  }

  type Job {
    id: String!
    description: String!
    description2: String!
  }

  type Group {
    description: String!
  }

  type Person {
    firstName: String!
    surname: String!
    age: Int!
    group: Group
    secondaryGroup: Group
  }
`;


export default schema;
