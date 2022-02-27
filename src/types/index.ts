export interface Employee {
  agent_id: number,
  name: string,
  department: string,
  branch: string,
  role: string,
  status: string,
  image: string,
}

export interface Role {
  name: string,
  departament: string,
  agents_quantity: number
}

export type GroupRule = {
  role: string,
  permissions: string[]
}

export interface RoleDetailType {
  name: string,
  department: string,
  grouprules: GroupRule[]
}