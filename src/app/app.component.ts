import { AfterViewInit, Component, ElementRef, ViewChild } from "@angular/core";
import { GraphEditorService } from "./services/graph-editor.service";
import { testButton } from "../test_data/example.button";
import { testTable } from "../test_data/example.table";
import { testForm } from "src/test_data/example.form";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements AfterViewInit {
  @ViewChild("graphContainer") graphContainer: ElementRef;

  constructor(private graphEditorService: GraphEditorService) {}

  showER() {
    console.log("grap", this.graphEditorService.editor.graph);
    console.log("graph model", this.graphEditorService.editor.graph.model);
  }

  addButton() {
    this.graphEditorService.createComponent(testButton);
  }

  addForm() {
    this.graphEditorService.createComponent(testForm);
  }

  addTable() {
    this.graphEditorService.createComponent(testTable);
  }

  ngAfterViewInit() {
    this.graphEditorService.initializeEditor("assets/keyhandler.xml");
  }
}
