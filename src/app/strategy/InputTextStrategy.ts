import { ICreateComponentStrategy } from "./ICreateComponentStrategy";
import { StyleLibrary } from "../styleLibrary";
import { GraphEditorService } from "../services/graph-editor.service";
import { InputTextComponent } from "../model/InputTextComponent.model";

export class InputTextStrategy extends ICreateComponentStrategy {
  constructor(geometry?: mxGeometry) {
    super(geometry);
  }

  createButtonVertex(
    graphEditorService: GraphEditorService,
    inputTextComponent: InputTextComponent,
    parent: mxCell
  ) {
    const style = StyleLibrary[0]["input"];
    const inputTextGeometry = new mxGeometry(this.basex, this.basey, 200, 30);

    let inputTextCell = graphEditorService.insertVertex(
      inputTextComponent.description,
      inputTextGeometry,
      parent,
      style
    );
    inputTextCell["componentPart"] = "box";
    inputTextCell["isPrimary"] = true;
    inputTextCell["componentID"] = inputTextComponent.id;
    inputTextCell["type"] = inputTextComponent.type;
    return inputTextCell;
  }

  createComponent(
    graphEditorService: GraphEditorService,
    inputTextComponent: InputTextComponent,
    parent: mxCell
  ): mxCell {
    return this.createButtonVertex(
      graphEditorService,
      inputTextComponent,
      parent
    );
  }
}
