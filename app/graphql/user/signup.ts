import { Variables } from "graphql-request";
import mutate from "@/app/graphql/mutate";

interface SignUpMutationVariables extends Variables {
  userRole: "user" | "admin";
  email: string;
  createdAt: string;
  updatedAt: string;
}

const SIGNUP_MUTATION = /* GraphQL */ `
  mutation signUp($userRole: UserRole!, $email: String!, $name: String!) {
    signUp(userRole: $userRole, email: $email, name: $name)
  }
`;

const signupMutation = async (variables: SignUpMutationVariables) => {
  return mutate(SIGNUP_MUTATION, variables);
};

export default signupMutation;
