import gql from "graphql-tag";

const schema = gql`

  type Query {
    helloWorld: String!
    getPeople: [Person!]!
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
