import useSWR from "swr";
import graphqlFetcher from "../graphql-fetcher";

const GET_COLUMNS_QUERY = /* GraphQL */ `
  query GetColumns {
    columns {
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

const useColumns = () => {
  const { data, error } = useSWR([GET_COLUMNS_QUERY], graphqlFetcher);

  console.log("Columns data logs:", data); // Debugging log

  return {
    columns: data?.columns ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useColumns;
