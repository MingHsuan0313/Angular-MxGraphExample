import { Injectable } from '@angular/core';
import { Configuration } from '../config/GraphConfiguration';

@Injectable({
  providedIn: 'root'
})
export class GraphEditorService {
  editor: mxEditor;

  constructor() {
    setTimeout(() => {
      let element = document.getElementById('graph-container');
      this.initializeEditor(element, "assets/keyhandler.xml");
    }, 100)
  }

  insertVertex(value: string, geometry: mxGeometry, parent) {

    this.editor.graph.insertVertex(parent, 0, value, geometry.x, geometry.y, geometry.width, geometry.height, "", "");
  }

  getDefaultParent() {
    return this.editor.graph.getDefaultParent();
  }

  initializeEditor(element: HTMLElement, configurePath: string): void {
    this.editor = new mxEditor();
    this.editor.setGraphContainer(element);
    this.editor.graph.setConnectable(true);

    let config = mxUtils.load(configurePath).getDocumentElement();
    this.editor.configure(config);
    Configuration.configureEditorKeyBinding(this.editor);
    Configuration.configureGraphListener(this.editor);
  }
}
