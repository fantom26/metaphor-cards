import { useCallback, useState } from "react";

import CardStack from "@/components/card-stack/CardStack";
import Container from "@/components/container/Container";
import Controls from "@/components/controls/Controls";
import FlippedCard from "@/components/flipped-card/FlippedCard";
import Header from "@/components/header/Header";
import OpenedCardsButton from "@/components/opened-cards-button/OpenedCardsButton";
import { CARD_ANIMATION_DURATION_MS } from "@/constants/animations";
import { Card } from "@/types/card";

import "./Home.css";

const INITIAL_CARDS: Card[] = [
  { id: 1, name: "Card 1", image: "/collection/card-1.jpg" },
  { id: 2, name: "Card 2", image: "/collection/card-1.jpg" },
  { id: 3, name: "Card 3", image: "/collection/card-1.jpg" },
  { id: 4, name: "Card 4", image: "/collection/card-1.jpg" },
  { id: 5, name: "Card 5", image: "/collection/card-1.jpg" },
  { id: 6, name: "Card 6", image: "/collection/card-1.jpg" },
  { id: 7, name: "Card 7", image: "/collection/card-1.jpg" },
  { id: 8, name: "Card 8", image: "/collection/card-1.jpg" },
  { id: 9, name: "Card 9", image: "/collection/card-1.jpg" },
  { id: 10, name: "Card 10", image: "/collection/card-1.jpg" }
];

export default function Home() {
  const [availableCards, setAvailableCards] = useState<Card[]>([
    ...INITIAL_CARDS
  ]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const [openedCards, setOpenedCards] = useState<Card[]>([]);

  const handleDrawRandom = useCallback(() => {
    if (availableCards.length === 0) {
      alert("No more cards available!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * availableCards.length);
    const randomCard = availableCards[randomIndex];

    setTimeout(() => {
      setSelectedCard(randomCard);
      setAvailableCards((prev) => prev.filter((c) => c.id !== randomCard.id));
      setOpenedCards((prev) => [...prev, randomCard]);
    }, CARD_ANIMATION_DURATION_MS);
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

      setTimeout(() => {
        setSelectedCard(card);
        setAvailableCards((prev) => prev.filter((c) => c.id !== cardNumber));
        setOpenedCards((prev) => [...prev, card]);
      }, CARD_ANIMATION_DURATION_MS);
    },
    [availableCards]
  );

  const handleOpenedCardsClick = useCallback(() => {
    console.log("Opened cards:", openedCards);
  }, [openedCards]);

  return (
    <div className="wrapper">
      <Header totalCards={INITIAL_CARDS.length} />
      <main className="main">
        <Container className="main-container">
          <div className="cards-wrapper">
            <CardStack
              cards={availableCards}
              selectedCardId={selectedCard?.id ?? null}
            />
            {selectedCard && (
              <FlippedCard key={selectedCard.id} card={selectedCard} />
            )}
          </div>
          {openedCards.length > 0 && (
            <OpenedCardsButton
              openedCards={openedCards}
              onClick={handleOpenedCardsClick}
            />
          )}
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
