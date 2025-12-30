import { KeyboardEvent, useState } from "react";

import "./Controls.css";

interface ControlsProps {
  onDrawRandom: () => void;
  onSelectCard: (cardNumber: number) => void;
  isDisabled?: boolean;
}

export default function Controls({
  onDrawRandom,
  onSelectCard,
  isDisabled = false
}: ControlsProps) {
  const [cardNumber, setCardNumber] = useState("");

  const handleSelect = () => {
    const num = parseInt(cardNumber);
    if (num >= 1 && num <= 10) {
      onSelectCard(num);
      setCardNumber("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSelect();
    }
  };

  return (
    <div className="controls">
      <div className="control-group">
        <button
          className="primary-button"
          onClick={onDrawRandom}
          disabled={isDisabled}
          type="button"
        >
          Draw a card
        </button>
      </div>
      <div className="divider"></div>
      <div className="control-group">
        <input
          type="number"
          className="card-input"
          min="1"
          max="10"
          placeholder="Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="secondary-button"
          onClick={handleSelect}
          type="button"
        >
          Reveal
        </button>
      </div>
    </div>
  );
}
