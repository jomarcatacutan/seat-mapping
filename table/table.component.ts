import { Component } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

interface DraggableItem {
  id: number;
  x: number;
  y: number;
  imageUrl: string;
}

interface ObjectLocation {
  x: number;
  y: number;
  imageUrl: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  draggableItems: DraggableItem[] = [];
  objectLocations: { [key: number]: ObjectLocation } = {}; // Mapping of object IDs to their locations
  nextItemId = 1;

  onDragEnd(event: CdkDragEnd, item: DraggableItem): void {
    const { x, y } = event.source.getFreeDragPosition();
    item.x = x;
    item.y = y;
  
    // Save the object location
    this.objectLocations[item.id] = { x, y, imageUrl: item.imageUrl };
  }

  addDraggableItem(imageUrl: string): void {
    const newItem: DraggableItem = {
      id: this.nextItemId++,
      x: this.nextItemId * 10,
      y: this.nextItemId * 10,
      imageUrl: imageUrl,
    };
    this.draggableItems.push(newItem);
  
    // Save the object location for the new item
    this.objectLocations[newItem.id] = {x: newItem.x, y: newItem.y, imageUrl: newItem.imageUrl };
  }

  removeDraggableItem(index: number): void {
    const removedItem = this.draggableItems[index];
    // Clone the array before modifying it
    this.draggableItems = [...this.draggableItems.slice(0, index), ...this.draggableItems.slice(index + 1)];
    // Remove the object location of the removed item
    delete this.objectLocations[removedItem.id];
  }
}
