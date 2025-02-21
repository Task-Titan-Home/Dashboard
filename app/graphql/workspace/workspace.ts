import graphqlFetcher from "../graphql-fetcher"; // Adjust the import path accordingly

const CREATE_WORKSPACE_MUTATION = /* GraphQL */ `
  mutation createWorkspace($name: String!) {
    createWorkspace(name: $name) {
      id
      name
      owner {
        id
        name
        email
      }
      projects {
        id
        name
      }
    }
  }
`;

const createWorkspaceMutation = async (variables: { name: string }) => {
  return graphqlFetcher(CREATE_WORKSPACE_MUTATION, variables);
};

export default createWorkspaceMutation;
