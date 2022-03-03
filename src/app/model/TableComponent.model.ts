import { UIComponentType } from "../constant";
import { BasicComponent } from "./BasicComponent.model";

export class TableComponent extends BasicComponent {
  headers: string;
  rows: string;
  constructor() {
    super();
    this.type = UIComponentType.Table;
  }
}
