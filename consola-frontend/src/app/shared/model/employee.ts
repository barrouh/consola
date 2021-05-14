import { Role } from './role';

export class Employee {
  public username!: string;
	public responsible!: Employee;
	public role!: Role;
	public password!: string;
	public fullName!: string;
	public email!: string;
	public joinDate!: Date;
	public leaveDate!: Date;
	public initialBalance!: number;
	public currentBalance!: number;
}
