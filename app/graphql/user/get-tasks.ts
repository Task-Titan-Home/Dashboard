import useSWR from "swr";
import graphqlFetcher from "../graphql-fetcher";

const GET_TASKS_QUERY = /* GraphQL */ `
  query GetTasks {
    tasks {
      id
      text
      dueDate
      description
      labels
      assignee
    }
  }
`;

const useTasks = () => {
  const { data, error } = useSWR([GET_TASKS_QUERY], graphqlFetcher);

  console.log("Tasks data:", data); // Add this line

  return {
    tasks: data?.tasks ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useTasks;
