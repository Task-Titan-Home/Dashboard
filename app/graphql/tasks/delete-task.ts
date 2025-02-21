import graphqlFetcher from "../graphql-fetcher";

const DELETE_TASK_MUTATION = `
  mutation DeleteTask($taskId: String!) {
    deleteTask(taskId: $taskId) {
      success
      message
    }
  }
`;

export const deleteTask = async (taskId: string) => {
  try {
    const response = await graphqlFetcher(DELETE_TASK_MUTATION, { taskId });
    return response; // Returns { success: boolean, message: string }
  } catch (error) {
    console.error("Error deleting task:", error);
    throw new Error((error as Error).message);
  }
};

