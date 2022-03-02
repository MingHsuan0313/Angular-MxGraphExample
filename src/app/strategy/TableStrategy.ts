import { ICreateComponentStrategy } from "./ICreateComponentStrategy";
import { StyleLibrary } from "../styleLibrary";
import { GraphEditorService } from "../services/graph-editor.service";
import { TableComponent } from "../model/TableComponent.model";

export class TableStrategy extends ICreateComponentStrategy {
  gridWidth: number;
  gridHeight: number;

  constructor(geometry?: mxGeometry) {
    super(geometry);
    this.gridWidth = 150;
    this.gridHeight = 40;
  }

  createTableBoxVertex(
    graphEditorService: GraphEditorService,
    component: TableComponent,
    parent: mxCell
  ): mxCell {
    const headerList = component.headers.trim().split(" ");
    const colNumber = headerList.length;

    const tableBoxStyle = StyleLibrary[0]["table"]["tableBox"];
    tableBoxStyle["overflow"] = true;
    const width = this.gridWidth * colNumber + 10;
    const height = this.gridHeight * 2;
    const tableBoxVertexGeometry = new mxGeometry(300, 300, width, height);
    let tableBoxCell = graphEditorService.insertVertex(
      "",
      tableBoxVertexGeometry,
      parent,
      tableBoxStyle
    );
    tableBoxCell["componentPart"] = "box";
    tableBoxCell["isPrimary"] = true;
    tableBoxCell["componentID"] = component.id;
    tableBoxCell["type"] = component.type;
    return tableBoxCell;
  }

  createTableHeaderVertex(
    graphEditorService: GraphEditorService,
    component,
    parent: mxCell
  ) {
    const headerList = component.headers.trim().split(" ");
    const colNumber = headerList.length;

    for (let i = 0; i < colNumber; i++) {
      const tableHeaderStyle = StyleLibrary[0]["table"]["tableHeader"];
      tableHeaderStyle["overflow"] = true;
      const x = i * this.gridWidth;
      const tableHeaderVertexGeometry = new mxGeometry(
        x,
        0,
        this.gridWidth,
        this.gridHeight
      );
      let tableHeaderCell = graphEditorService.insertVertex(
        component["headers"].split(" ")[i],
        tableHeaderVertexGeometry,
        parent,
        tableHeaderStyle
      );
      tableHeaderCell["componentPart"] = "header";
      tableHeaderCell["isPrimary"] = false;
      tableHeaderCell["componentID"] = component.id;
    }
  }

  createTableDataVertex(
    graphEditorService: GraphEditorService,
    component,
    parent: mxCell
  ) {
    const tableDataStyle = StyleLibrary[0]["table"]["tableData_grey"];
    const headerList = component.headers.trim().split(" ");
    const colNumber = headerList.length;
    tableDataStyle["overflow"] = true;

    for (let i = 0; i < colNumber; i++) {
      const x = i * this.gridWidth;
      const y = 1 * this.gridHeight;
      const tableDataVertexGeometry = new mxGeometry(
        x,
        y,
        this.gridWidth,
        this.gridHeight
      );
      let tableDataCell = graphEditorService.insertVertex(
        component["rows"].split(" ")[i],
        tableDataVertexGeometry,
        parent,
        tableDataStyle
      );
      tableDataCell["componentPart"] = "rows";
      tableDataCell["isPrimary"] = false;
      tableDataCell["componentID"] = component.id;
    }
  }

  createComponent(
    graphEditorService: GraphEditorService,
    component,
    parent: mxCell
  ): mxCell {
    mxConstants.SHADOW_OPACITY = 0.3;
    let tableBoxCell = this.createTableBoxVertex(
      graphEditorService,
      component,
      parent
    );
    this.createTableHeaderVertex(graphEditorService, component, tableBoxCell);
    this.createTableDataVertex(graphEditorService, component, tableBoxCell);
    return tableBoxCell;
  }
}
