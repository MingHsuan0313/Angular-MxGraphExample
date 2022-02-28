import { Injectable } from "@angular/core";
import { GraphConfiguration } from "../config/GraphConfiguration";
import { UIComponent } from "../model/UIComponent.model";
import { ButtonStrategy } from "../strategy/ButtonStrategy";
import { FormStrategy } from "../strategy/FormStrategy";
import { ICreateComponentStrategy } from "../strategy/ICreateComponentStrategy";
import { InputTextStrategy } from "../strategy/InputTextStrategy";
import { TableStrategy } from "../strategy/TableStrategy";

@Injectable({
  providedIn: "root",
})
export class GraphEditorService {
  editor: mxEditor;
  createComponentStrategy: ICreateComponentStrategy;
  element: HTMLElement;

  constructor() {}

  insertVertex(
    value: string,
    geometry: mxGeometry,
    parent: mxCell,
    style: Object
  ) {
    let styleDescription = this.convertJsonObjectToStyleDescription(style);
    return this.editor.graph.insertVertex(
      parent,
      0,
      value,
      geometry.x,
      geometry.y,
      geometry.width,
      geometry.height,
      styleDescription,
      ""
    );
  }

  insertEdge(parent: mxCell, sourceCell: mxCell, targetCell: mxCell) {
    return this.editor.graph.insertEdge(parent, "", "", sourceCell, targetCell);
  }

  createComponent(uiComponent: UIComponent, parent?: mxCell) {
    if (uiComponent["type"] == "button") {
      this.setStrategy(new ButtonStrategy());
    } else if (uiComponent["type"] == "table") {
      this.setStrategy(new TableStrategy());
    } else if (uiComponent["type"] == "inputText") {
      this.setStrategy(new InputTextStrategy());
    } else if (uiComponent["type"] == "form") {
      this.setStrategy(new FormStrategy());
    }
    return this.createComponentStrategy.createComponent(
      this,
      uiComponent,
      parent ? parent : this.editor.graph.defaultParent
    );
  }

  setStrategy(strategy: ICreateComponentStrategy) {
    this.createComponentStrategy = strategy;
  }

  getDefaultParent(): mxCell {
    return this.editor.graph.getDefaultParent();
  }

  initializeEditor(configurePath: string): void {
    this.element = document.getElementById("graph-container");
    this.editor = new mxEditor();
    this.editor.setGraphContainer(this.element);
    this.editor.graph.setConnectable(true);
    const config = mxUtils.load(configurePath).getDocumentElement();
    this.editor.configure(config);
    GraphConfiguration.configureEditorKeyBinding(this.editor);
    GraphConfiguration.configureGraphListener(this.editor);
  }

  convertJsonObjectToStyleDescription(styleObj: Object): string {
    let styleDescription = "";
    const styleKeys = Object.keys(styleObj);
    for (let index = 0; index < styleKeys.length; index++) {
      const key = styleKeys[index];
      if (styleObj[key] === undefined) continue;
      if (index === styleKeys.length - 1)
        styleDescription = styleDescription + `${key}=${styleObj[key]};`;
      else styleDescription = styleDescription + `${key}=${styleObj[key]};`;
    }
    return styleDescription;
  }
}
