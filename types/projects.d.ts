import type { IWorkspace } from "./";

export interface IProject {
  id: string;
  workspace: IWorkspace | string;
  default_assignee: IUser | string | null;
  project_lead: IUser | string | null;
  created_at: Date;
  updated_at: Date;
  name: string;
  description: string;
  network: number;
  identifier: string;
  slug: string;
  created_by: string;
  updated_by: string;
}