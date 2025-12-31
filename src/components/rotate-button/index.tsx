import "./rotate-button.scss";

interface RotateButtonProps {
  onRotate: () => void;
}

export default function RotateButton({ onRotate }: RotateButtonProps) {
  return (
    <button
      className="rotate-button"
      onClick={onRotate}
      aria-label="Rotate card"
      type="button"
    >
      ↻
    </button>
  );
}
