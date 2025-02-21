import graphqlFetcher from "../graphql-fetcher"; // Adjust the import path accordingly
import { TaskPriority } from "@/app/types/task-priority";
import { TaskStatus } from "@/app/types/task-status";
const ADD_TASK_MUTATION = /* GraphQL */ `
  mutation CreateTask(
    $title: String!
    $description: String
    $deadline: DateTime!
    $priority: TaskPriority!
    $status: TaskStatus!
    $columnId: String!
    $projectId: String!
    $assignedToId: String
  ) {
    createTask(
      title: $title
      description: $description
      deadline: $deadline
      priority: $priority
      status: $status
      columnId: $columnId
      projectId: $projectId
      assignedToId: $assignedToId
    ) {
      id
      title
      description
      deadline
      priority
      status
      assignedTo {
        id
        name
      }
    }
  }
`;

const addTaskMutation = async (variables: {
  title: string;
  deadline: string;
  description?: string;
  priority: TaskPriority;
  status: TaskStatus;
  columnId: string;
  projectId: string;
  assignedToId?: string;
}) => {
  return graphqlFetcher(ADD_TASK_MUTATION, variables);
};

export default addTaskMutation;
