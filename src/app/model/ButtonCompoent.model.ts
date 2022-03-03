import { UIComponentType } from "../constant";
import { BasicComponent } from "./BasicComponent.model";

export class ButtonComponent extends BasicComponent {
  text: string;
  href: string;
  trigger: boolean;
  constructor() {
    super();
    this.type = UIComponentType.Button;
  }
}
