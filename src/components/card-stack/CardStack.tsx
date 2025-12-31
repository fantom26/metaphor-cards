import CardComponent from "@/components/card/Card";
import { Card } from "@/types/card";
import { AnimatePresence } from "framer-motion";

import "./CardStack.scss";

interface CardStackProps {
  cards: Card[];
  selectedCardId: number | null;
}

export default function CardStack({ cards, selectedCardId }: CardStackProps) {
  return (
    <div className="card-set">
      <AnimatePresence mode="popLayout">
        {cards.map((card, index) => (
          <CardComponent
            key={card.id}
            card={card}
            index={index}
            isSelected={selectedCardId === card.id}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
