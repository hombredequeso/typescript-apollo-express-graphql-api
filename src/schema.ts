import gql from "graphql-tag";

const schema = gql`

  type Query {
    helloWorld: String!
  }
`;


export default schema;
