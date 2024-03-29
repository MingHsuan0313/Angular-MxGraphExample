import { ICreateComponentStrategy } from "./ICreateComponentStrategy";
import { StyleLibrary } from "../styleLibrary";
import { GraphEditorService } from "../services/graph-editor.service";
import { ButtonComponent } from "../model/ButtonCompoent.model";

export class ButtonStrategy extends ICreateComponentStrategy {
  constructor(geometry?: mxGeometry) {
    super(geometry);
  }

  createButtonVertex(
    graphEditorService: GraphEditorService,
    buttonComponent: ButtonComponent,
    parent: mxCell
  ) {
    const style = StyleLibrary[0]["button"];
    const width = 15 * buttonComponent.text.length;
    const height = 40;
    const buttonGeometry = new mxGeometry(550, 150, width, height);

    let buttonCell = graphEditorService.insertVertex(
      buttonComponent.text,
      buttonGeometry,
      parent,
      style
    );
    buttonCell["componentPart"] = "box";
    buttonCell["isPrimary"] = true;
    buttonCell["componentID"] = buttonComponent.id;
    buttonCell["type"] = buttonComponent.type;
    return buttonCell;
  }

  createComponent(
    graphEditorService: GraphEditorService,
    buttonComponent: ButtonComponent,
    parent: mxCell
  ): mxCell {
    return this.createButtonVertex(graphEditorService, buttonComponent, parent);
  }
}
