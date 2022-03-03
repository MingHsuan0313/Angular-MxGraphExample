import { UIComponentType } from "../constant";
import { BasicComponent } from "./BasicComponent.model";

export class InputTextComponent extends BasicComponent {
  description: string;
  constructor() {
    super();
    this.type = UIComponentType.InputText;
  }
}
