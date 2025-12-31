import "./card-back.scss";

interface CardBackProps {
  src?: string;
  alt?: string;
}

export default function CardBack({ src, alt }: CardBackProps) {
  return (
    <div className="card-back">
      {src && <img src={src} alt={alt} className="card-image" />}
    </div>
  );
}
