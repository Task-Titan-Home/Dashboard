// src/graphql/mutations/updateTaskOrder.ts
import graphqlFetcher from "../graphql-fetcher";

const UPDATE_TASK_ORDER_MUTATION = /* GraphQL */ `
  mutation UpdateTaskOrder($columnId: String!, $taskIds: [String!]!) {
    updateTaskOrder(columnId: $columnId, taskIds: $taskIds)
  }
`;

const updateTaskOrder = async (columnId: string, taskIds: string[]) => {
  return graphqlFetcher(UPDATE_TASK_ORDER_MUTATION, { columnId, taskIds });
};

export default updateTaskOrder;
