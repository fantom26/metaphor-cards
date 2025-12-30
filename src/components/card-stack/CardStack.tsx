import CardComponent from "@/components/card/Card";
import { Card } from "@/types/card";

import "./CardStack.css";

interface CardStackProps {
  cards: Card[];
}

export default function CardStack({ cards }: CardStackProps) {
  return (
    <div className="card-set">
      {cards.map((card, index) => (
        <CardComponent key={card.id} card={card} index={index} />
      ))}
    </div>
  );
}
