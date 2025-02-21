// src/graphql/user/create-project-mutation.ts
import graphqlFetcher from "../graphql-fetcher";

const CREATE_PROJECT_MUTATION = /* GraphQL */ `
  mutation CreateProject(
    $name: String!
    $description: String
    $workspaceId: String!
  ) {
    createProject(
      name: $name
      description: $description
      workspaceId: $workspaceId
    ) {
      id
      name
      description
      workspaceId
      createdAt
      updatedAt
      createdBy {
        id
        name
      }
      projectMembers {
        id
        user {
          id
          name
        }
      }
    }
  }
`;

const createProjectMutation = async (variables: {
  name: string;
  description?: string;
  workspaceId: string;
}) => {
  return graphqlFetcher(CREATE_PROJECT_MUTATION, variables);
};

export default createProjectMutation;
