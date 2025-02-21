import { Variables } from "graphql-request";
import mutate from "@/app/graphql/mutate";

interface LoginMutationVariables extends Variables {
  email: string; // Change email to be a required field
}

const LOGIN_MUTATION = /* GraphQL */ `
  mutation login($email: String!) {
    login(email: $email)
  }
`;

const loginMutation = async (variables: LoginMutationVariables) => {
  const response = mutate(LOGIN_MUTATION, variables);
  console.log(response);

  return response;
};

export default loginMutation;
