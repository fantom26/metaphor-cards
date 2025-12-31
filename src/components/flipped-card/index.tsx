import { useState } from "react";

import CardBack from "@/components/card-back";
import CardFront from "@/components/card-front";
import RotateButton from "@/components/rotate-button";
import { CARD_ANIMATION_DURATION_S } from "@/constants/animations";
import { Card } from "@/types/card";
import { motion } from "framer-motion";

import "./flipped-card.scss";

interface FlippedCardProps {
  card: Card;
}

export default function FlippedCard({ card }: FlippedCardProps) {
  const [rotation, setRotation] = useState(0);

  const handleRotate = () => {
    setRotation((prev) => prev + 90);
  };

  return (
    <div className="flipped-card-container">
      <motion.div
        layoutId={`card-${card.id}`}
        className="card"
        initial={false}
        animate={{
          rotate: 0,
          rotateZ: rotation,
          x: 0,
          y: 0
        }}
        transition={{
          layout: { duration: CARD_ANIMATION_DURATION_S, ease: "easeInOut" },
          rotateZ: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
        }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <motion.div
          className="card-inner"
          key={`card-inner-${card.id}`}
          initial={{ rotateY: 0 }}
          animate={{ rotateY: 180 }}
          transition={{
            duration: CARD_ANIMATION_DURATION_S,
            ease: "easeInOut"
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <CardFront />
          <CardBack>
            <img src={card.image} alt={card.name} className="card-image" />
          </CardBack>
        </motion.div>
      </motion.div>
      <RotateButton onRotate={handleRotate} />
    </div>
  );
}
