import { Card } from "@/types/card";
import { getCardStackPosition } from "@/utils/cardStackPosition";

import { MAX_CARDS } from "@/pages/home";

import "./opened-cards-button.scss";

interface OpenedCardsButtonProps {
  openedCards: Card[];
  onClick: () => void;
}

export default function OpenedCardsButton({
  openedCards,
  onClick
}: OpenedCardsButtonProps) {
  return (
    <button className="opened-cards-button" onClick={onClick} type="button">
      <div className="opened-cards-stack">
        {Array.from({ length: Math.min(openedCards.length, MAX_CARDS) }).map(
          (_, index) => {
            const { offsetX, offsetY, rotation } = getCardStackPosition(-index);

            return (
              <div
                key={index}
                className="opened-card-mini"
                style={
                  {
                    transform: `translateX(${offsetX}px) translateY(${offsetY}px) rotate(${rotation}deg)`,
                    zIndex: -index,
                    ["--offset-x" as string]: `${-offsetX}px`,
                    ["--offset-y" as string]: `${-offsetY}px`,
                    ["--rotation" as string]: `${-rotation}deg`
                  } as React.CSSProperties
                }
              >
                <div className="opened-card-mini-inner">
                  <div className="card-front"></div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </button>
  );
}
