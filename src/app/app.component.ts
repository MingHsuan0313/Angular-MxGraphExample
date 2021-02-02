import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { GraphEditorService } from './services/graph-editor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('graphContainer') graphContainer: ElementRef;

  constructor(
    private graphEditorService: GraphEditorService
  ) {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      let value = "Click Me";
      let geometry = new mxGeometry(50, 50, 200, 200);
      let parent = this.graphEditorService.getDefaultParent();
      this.graphEditorService.insertVertex(value, geometry, parent);
    }, 200)
  }
}
