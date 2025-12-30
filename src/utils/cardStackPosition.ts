export interface CardStackPosition {
  offsetX: number;
  offsetY: number;
  rotation: number;
}

export function getCardStackPosition(index: number): CardStackPosition {
  return {
    offsetX: index * 3,
    offsetY: index * 2,
    rotation: index * 0.5
  };
}
