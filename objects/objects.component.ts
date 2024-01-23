import { Component, HostListener, ElementRef } from '@angular/core';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { DraggableItem, ObjectLocation } from '../types/objects.type';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-objects',
  templateUrl: './objects.component.html',
  styleUrls: ['./objects.component.scss']
})
export class ObjectsComponent {
  constructor(private elRef: ElementRef, private modalService: NgbModal) { }
  
  draggableItems: DraggableItem[] = [];
  objectLocations: { [key: number]: ObjectLocation } = {};
  nextItemId = 1;
  selectedItem: DraggableItem | null = null;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const hostElement = this.elRef.nativeElement;
    const targetElement = event.target as HTMLElement;
    if (!hostElement.contains(targetElement)) {
      this.deselectAllItems();
    }
  }

  deselectAllItems(): void {
    this.draggableItems.forEach(item => item.isSelected = false);
  }

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
      isSelected: false,
    };
    this.draggableItems.push(newItem);
  
    // Save the object location for the new item
    this.objectLocations[newItem.id] = {x: newItem.x, y: newItem.y, imageUrl: newItem.imageUrl };
  }

  selectItem(selectedItem: DraggableItem): void {
    this.draggableItems.forEach(item => {
      item.isSelected = item === selectedItem;
    });
  }

  openModal(content: any, item: DraggableItem) {
    this.selectedItem = item;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.selectedItem = null; // Reset selected item when modal is closed
      }, 
      (reason) => {
        this.selectedItem = null; // Reset selected item if modal is dismissed
      }
    );
  }

  removeSelectedItem(modal: any): void {
    if (this.selectedItem) {
      const index = this.draggableItems.indexOf(this.selectedItem);
      if (index !== -1) {
        this.draggableItems.splice(index, 1);
        delete this.objectLocations[this.selectedItem.id];
      }
      this.selectedItem = null;
      modal.close(); // Close the modal
    }
  }
}
