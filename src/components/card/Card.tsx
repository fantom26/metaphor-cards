import { CSSProperties } from "react";

import "./Card.css";

interface CardProps {
  card: { id: number; name: string };
  index: number;
  totalCards: number;
  isSelected?: boolean;
}

export default function Card({
  card,
  index,
  totalCards,
  isSelected = false
}: CardProps) {
  const offsetX = index * 2;
  const offsetY = index * 1.5;
  const rotation = index * 0.3;

  const cardStyle: CSSProperties = {
    zIndex: totalCards - index,
    transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`,
    opacity: isSelected ? 0 : 1,
    visibility: isSelected ? "hidden" : "visible"
  };

  return (
    <div className="card" style={cardStyle} data-card-id={card.id}>
      <div className="card-inner">
        <div className="card-front"></div>
        <div className="card-back"></div>
      </div>
    </div>
  );
}
