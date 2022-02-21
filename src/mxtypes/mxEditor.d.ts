declare class mxEditor {
  graph: mxGraph;
  keyHandler: any;
  modified: Boolean;
  constructor(config);
  constructor();
  configure(config);
  addAction(actionname: string, funct: Function);
  addVertex(parent, vertex, x, y);
  redo();
  undo();
  save(url, linefeed);
  setGraphContainer(container: HTMLElement);
  swapStyles(first, second);
  execute(action: string);
  setModified(value);
}
