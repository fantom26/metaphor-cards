import { CSSProperties, forwardRef } from "react";

import CardBack from "@/components/card-back";
import CardFront from "@/components/card-front";
import { CARD_ANIMATION_DURATION_S } from "@/constants/animations";
import { getCardStackPosition } from "@/utils/cardStackPosition";
import { motion } from "framer-motion";

import "./card.scss";

interface CardProps {
  card: { id: number; name: string };
  index: number;
  isSelected?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ card, index, isSelected = false }, ref) => {
    const { offsetX, offsetY, rotation } = getCardStackPosition(index);

    const cardStyle: CSSProperties = {
      zIndex: -index
    };

    return (
      <motion.div
        ref={ref}
        layoutId={`card-${card.id}`}
        className="card"
        style={cardStyle}
        data-card-id={card.id}
        initial={false}
        animate={{
          x: offsetX,
          y: offsetY,
          rotate: rotation,
          opacity: isSelected ? 0 : 1
        }}
        transition={{
          layout: { duration: CARD_ANIMATION_DURATION_S, ease: "easeInOut" },
          opacity: { duration: 0.2 }
        }}
      >
        <CardFront />
        <CardBack />
      </motion.div>
    );
  }
);

export default Card;
