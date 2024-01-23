export interface DraggableItem {
  id: number;
  x: number;
  y: number;
  imageUrl: string;
  isSelected?: boolean;
}

export interface ObjectLocation {
  x: number;
  y: number;
  imageUrl: string;
}