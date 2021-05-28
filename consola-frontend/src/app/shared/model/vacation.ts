import { Employee } from './employee';

export class Vacation {
  public id!: number;
  public employee!: Employee;
  public requestDate!: Date;
  public startDate!: Date ;
  public endDate!: Date;
  public duration!: number;
  public comment!: string;
}
