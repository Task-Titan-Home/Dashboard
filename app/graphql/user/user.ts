import graphqlFetcher from "@/app/graphql/graphql-fetcher";

import useSWR from "swr";

const USER_QUERY = /* GraphQL */ `
  {
    me {
      id
      name
      role
      picture
      subscription {
        id
        type
        tier
        isActive
        expiresAt
        refundRequest
      }
    }
  }
`;

const useUser = () => {
  const result = useSWR([USER_QUERY], { fetcher: graphqlFetcher });

  return result;
};

export default useUser;
