import useSWR from "swr";
import graphqlFetcher from "../graphql-fetcher";

const CURRENT_USER_WORKSPACE_QUERY = /* GraphQL */ `
  query CurrentWorkspace {
    currentWorkspace {
      id
      name
    }
  }
`;

const useCurrentUserWorkspace = () => {
  const { data, error } = useSWR(
    [CURRENT_USER_WORKSPACE_QUERY],
    graphqlFetcher
  );

  console.log("useCurrentUserWorkspace data:", data);
  console.log("useCurrentUserWorkspace error:", error);

  return {
    workspace: data ?? null,
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useCurrentUserWorkspace;
