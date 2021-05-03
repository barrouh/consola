import { Status } from './status';

export class Project {
  public id: number | undefined;
  public status: Status | undefined;
  public name: string | undefined;
  public shortName: string | undefined;
  public startDate: Date = new Date();
  public endDate: Date = new Date();
}