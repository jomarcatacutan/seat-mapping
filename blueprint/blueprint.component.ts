import { Component, ViewChild } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ObjectsComponent } from '../objects/objects.component';

@Component({
  selector: 'app-blueprint',
  templateUrl: './blueprint.component.html',
  styleUrls: ['./blueprint.component.scss']
})
export class BlueprintComponent {
  @ViewChild(TableComponent) tableComponent: TableComponent;
  @ViewChild(ObjectsComponent) objectsComponent: ObjectsComponent;
  componentToShow: string = '';

  showComponent(component: string) {
    this.componentToShow = component;
  }

  addItem(item: string) {
    let imageUrl;
    if (item === 'table3x3') {
      imageUrl = './assets/media/images/table.png';
      this.tableComponent.addDraggableItem(imageUrl);
    } else if (item === 'table') {
      imageUrl = './assets/media/images/table.png';
      this.objectsComponent.addDraggableItem(imageUrl);
    } else if (item === 'vertical') {
      imageUrl = './assets/media/images/wall.png';
      this.objectsComponent.addDraggableItem(imageUrl);
    } else if (item === 'horizontal') {
      imageUrl = './assets/media/images/wall2.png';
      this.objectsComponent.addDraggableItem(imageUrl);
    } else if (item === 'chair') {
      imageUrl = './assets/media/images/chair.png';
      this.objectsComponent.addDraggableItem(imageUrl);
    } else {
      imageUrl = './assets/media/images/wall.png';
    }
  }
}
