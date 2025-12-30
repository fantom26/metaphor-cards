import { useCallback, useState } from "react";

import CardStack from "@/components/card-stack/CardStack";
import Container from "@/components/container/Container";
import Controls from "@/components/controls/Controls";
import FlippedCard from "@/components/flipped-card/FlippedCard";
import Header from "@/components/header/Header";
import { Card } from "@/types/card";

import "./Home.css";

const INITIAL_CARDS: Card[] = [
  { id: 1, name: "Card 1" },
  { id: 2, name: "Card 2" },
  { id: 3, name: "Card 3" },
  { id: 4, name: "Card 4" },
  { id: 5, name: "Card 5" },
  { id: 6, name: "Card 6" },
  { id: 7, name: "Card 7" },
  { id: 8, name: "Card 8" },
  { id: 9, name: "Card 9" },
  { id: 10, name: "Card 10" }
];

export default function Home() {
  const [availableCards, setAvailableCards] = useState<Card[]>([
    ...INITIAL_CARDS
  ]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const handleDrawRandom = useCallback(() => {
    if (availableCards.length === 0) {
      alert("No more cards available!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = availableCards[randomIndex];

    setSelectedCardId(randomCard.id);

    // Simulate animation delay before showing the flipped card
    setTimeout(() => {
      setSelectedCard(randomCard);
      setAvailableCards((prev) => prev.filter((c) => c.id !== randomCard.id));
      setSelectedCardId(null);
    }, 800);
  }, [availableCards]);

  const handleSelectCard = useCallback(
    (cardNumber: number) => {
      const card = availableCards.find((c) => c.id === cardNumber);

      if (!card) {
        alert(`Card ${cardNumber} is no longer available!`);
        return;
      }

      if (cardNumber < 1 || cardNumber > 10) {
        alert("Please enter a valid card number between 1 and 10!");
        return;
      }

      setSelectedCardId(cardNumber);

      // Simulate animation delay before showing the flipped card
      setTimeout(() => {
        setSelectedCard(card);
        setAvailableCards((prev) => prev.filter((c) => c.id !== cardNumber));
        setSelectedCardId(null);
      }, 800);
    },
    [availableCards]
  );

  return (
    <div className="wrapper">
      <Header totalCards={INITIAL_CARDS.length} />
      <main className="main">
        <Container className="main-container">
          <div className="cards-wrapper">
            <CardStack cards={availableCards} selectedCardId={selectedCardId} />
            {selectedCard && <FlippedCard card={selectedCard} />}
          </div>
        </Container>
      </main>
      <footer className="footer">
        <Container>
          <Controls
            onDrawRandom={handleDrawRandom}
            onSelectCard={handleSelectCard}
            isDisabled={availableCards.length === 0}
          />
        </Container>
      </footer>
    </div>
  );
}
