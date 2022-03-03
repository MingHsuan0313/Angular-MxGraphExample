import { UIComponentType } from "../constant";
import { CompositeComponent } from "./CompositeComponent.model";

export class FormComponent extends CompositeComponent {
  constructor() {
    super();
    this.type = UIComponentType.Form;
  }
}
