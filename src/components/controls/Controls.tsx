import { useState } from "react";

import { MAX_CARDS } from "@/pages/home";

import "./Controls.scss";

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
    onSelectCard(parseInt(cardNumber));
    setCardNumber("");
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
          max={MAX_CARDS}
          placeholder="Number"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <button
          className="secondary-button"
          onClick={handleSelect}
          disabled={isDisabled}
          type="button"
        >
          Reveal
        </button>
      </div>
    </div>
  );
}
