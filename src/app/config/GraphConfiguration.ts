export class GraphConfiguration {
  static configureEditorKeyBinding(editor: mxEditor): void {
    editor.addAction("mx-cut", (event: mxEvent) => {
      editor.execute("cut");
    });

    editor.addAction("mx-copy", (event: mxEvent) => {
      editor.execute("copy");
    });

    editor.addAction("mx-paste", (event: mxEvent) => {
      editor.execute("paste");
    });

    editor.addAction("mx-delete", (event: mxEvent) => {
      editor.execute("delete");
    });

    editor.addAction("mx-selectAll", (event: mxEvent) => {
      editor.execute("selectAll");
    });

    editor.addAction("mx-undo", (event: mxEvent) => {
      editor.execute("undo");
    });

    editor.addAction("mx-redo", (event: mxEvent) => {
      editor.execute("redo");
    });

    editor.addAction("mx-group", (event: mxEvent) => {
      editor.execute("group");
    });

    editor.addAction("mx-ungroup", (event: mxEvent) => {
      editor.execute("ungroup");
    });
  }

  static configureGraphListener(editor: mxEditor): void {
    editor.graph.addListener(mxEvent.CLICK, (sender, event) => {
      let selectedCell = sender.selectionModel.cells[0];
      if (selectedCell.type == "button") alert("click");
    });

    editor.graph.addListener(mxEvent.RESIZE_CELLS, (sender, event) => {
      let selectedCell = sender.selectionModel.cells[0];
      if (selectedCell.type == "button") alert("resize");
    });
  }
}
