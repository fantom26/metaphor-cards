import { ReactNode } from "react";

import "./card-front.scss";

interface CardFrontProps {
  children?: ReactNode;
}

export default function CardFront({ children }: CardFrontProps) {
  return <div className="card-front">{children}</div>;
}
