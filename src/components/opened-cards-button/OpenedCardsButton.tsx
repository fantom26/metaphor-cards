import "./OpenedCardsButton.css";

interface OpenedCardsButtonProps {
  openedCardsCount: number;
  onClick: () => void;
}

export default function OpenedCardsButton({
  openedCardsCount,
  onClick
}: OpenedCardsButtonProps) {
  if (openedCardsCount === 0) {
    return null;
  }

  return (
    <button className="opened-cards-button" onClick={onClick} type="button">
      <div className="opened-cards-stack">
        {Array.from({ length: Math.min(openedCardsCount, 10) }).map(
          (_, index) => {
            const offsetX = index * 0.8;
            const offsetY = index * 0.6;
            const rotation = index * 0.15;

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
