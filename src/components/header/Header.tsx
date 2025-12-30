import "./Header.css";

interface HeaderProps {
  totalCards: number;
}

export default function Header({ totalCards }: HeaderProps) {
  return (
    <header className="header">
      <div className="container">
        <h1 className="total">
          <span className="total-cards-label">Total card in the stack</span>
          <span className="total-cards">{totalCards}</span>
        </h1>
      </div>
    </header>
  );
}
