import { useState } from "react";

import RotateButton from "@/components/rotate-button/RotateButton";
import { Card } from "@/types/card";

import "./FlippedCard.css";

interface FlippedCardProps {
  card: Card;
}

export default function FlippedCard({ card }: FlippedCardProps) {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  const cardStyle = {
    transform: `rotateY(180deg) rotateZ(${rotation}deg)`
  };

  return (
    <div className="flipped-card-container show">
      <div className="flipped-card-inner" style={cardStyle}>
        <div className="card-back">
          <span className="card-number">{card.id}</span>
        </div>
      </div>
      <RotateButton onRotate={handleRotate} />
    </div>
  );
}
