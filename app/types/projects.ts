// src/types/project.ts
export interface User {
    id: string;
    name: string;
  }
  
  export interface ProjectMember {
    id: string;
    user: User;
  }
  
  export interface Project {
    id: string;
    name: string;
    description: string;
    workspaceId: string;
    createdAt: string;
    updatedAt: string;
    createdBy: User;
    projectMembers: ProjectMember[];
  }
  