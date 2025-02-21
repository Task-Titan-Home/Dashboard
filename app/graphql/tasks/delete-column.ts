import graphqlFetcher from "../graphql-fetcher";

const DELETE_COLUMN_MUTATION = `
  mutation DeleteColumn($columnId: String!) {
    deleteColumn(columnId: $columnId)
  }
`;

export const deleteColumn = async (columnId: string) => {
  if (!columnId) {
    console.error("Error: columnId is required but not provided.");
    return false;
  }

  try {
    const response = await graphqlFetcher(DELETE_COLUMN_MUTATION, { columnId });

    // If the response is not true, log it as a failure
    if (!response) {
      throw new Error("Failed to delete column: Response was false.");
    }

    return response; // This will return true on success
  } catch (error) {
    console.error("Error deleting column:", error.message || error);
    throw new Error(error.message || "An unknown error occurred.");
  }
};
