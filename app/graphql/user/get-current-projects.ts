import useSWR from "swr";
import graphqlFetcher from "../graphql-fetcher";

const CURRENT_PROJECTS_QUERY = /* GraphQL */ `
  query CurrentProjects {
    currentProjects {
      id
      name
      description
      workspaceId
      workspace {
        id
        name
      }
    }
  }
`;

const useCurrentProjects = () => {
  const { data, error } = useSWR([CURRENT_PROJECTS_QUERY], graphqlFetcher);

  console.log("useCurrentProjects data:", data);
  console.log("useCurrentProjects error:", error);

  return {
    projects: data ?? [],
    isLoading: !error && !data,
    isError: !!error,
  };
};

export default useCurrentProjects;
