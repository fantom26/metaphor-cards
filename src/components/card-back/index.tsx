import { ReactNode } from "react";

import "./card-back.scss";

interface CardBackProps {
  children?: ReactNode;
}

export default function CardBack({ children }: CardBackProps) {
  return <div className="card-back">{children}</div>;
}
