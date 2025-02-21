import { Variables } from "graphql-request";
import graphqlFetcher from "../graphql-fetcher"; // Adjust the import path accordingly

const ADD_COLUMN_MUTATION = /* GraphQL */ `
  mutation createColumn($name: String!, $projectId: String!) {
    createColumn(name: $name, projectId: $projectId) {
      id
      name
      tasks {
        id
        title
        description
        deadline
        priority
        status
        assignedTo {
          id
          email
          name
        }
      }
    }
  }
`;

const addColumnMutation = async (variables: Variables) => {
  return graphqlFetcher(ADD_COLUMN_MUTATION, variables);
};

export default addColumnMutation;
