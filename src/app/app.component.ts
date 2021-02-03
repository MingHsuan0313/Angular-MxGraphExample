import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GraphEditorService } from './services/graph-editor.service';
import { testButton } from '../test_data/example.button';
import { testTable } from '../test_data/example.table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;
  graph: mxGraph;
  model: mxGraphModel;

  constructor(
  ) {

  }

  showER() {
    console.log('mxGraph');
    console.log(this.graph);
    console.log('mxGraphModel');
    console.log(this.model);
  }

  ngAfterViewInit() {
    setTimeout(() => {
      let element = document.getElementById('graph-container');
      this.graph = new mxGraph(element);
      this.model = this.graph.getModel();
      try {
        const parent = this.graph.getDefaultParent();
        this.graph.getModel().beginUpdate();

        const vertex1 = this.graph.insertVertex(parent, '1', 'Vertex 1', 0, 0, 200, 80);
        const vertex2 = this.graph.insertVertex(parent, '2', 'Vertex 2', 300, 300, 200, 80);

        this.graph.insertEdge(parent, '', '', vertex1, vertex2);
      } finally {
        this.graph.getModel().endUpdate();
      }
    }, 200)
  }
}
