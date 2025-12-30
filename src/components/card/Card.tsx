import { CSSProperties } from "react";

import "./Card.css";

interface CardProps {
  card: { id: number; name: string };
  index: number;
}

export default function Card({ card, index }: CardProps) {
  const offsetX = index * 2;
  const offsetY = index * 1.5;
  const rotation = index * 0.3;

  const cardStyle: CSSProperties = {
    zIndex: -index,
    transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`
  };

  return (
    <div className="card" style={cardStyle} data-card-id={card.id}>
      <div className="card-inner">
        <div className="card-front"></div>
      </div>
    </div>
  );
}
