import { Variables } from "graphql-request";
import { mutate } from "swr";

interface VerifyTokenMutationVariables extends Variables {
  token: string;
}
const VERIFY_TOKEN_MUTATION = /* GraphQL */ `
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      accessToken
      message
    }
  }
`;
const verifyTokenMutation = async (variables: VerifyTokenMutationVariables) => {
  return mutate(VERIFY_TOKEN_MUTATION, variables);
};
