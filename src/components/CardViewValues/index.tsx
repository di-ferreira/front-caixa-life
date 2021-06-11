import { ReactNode } from "react";

interface CardViewValuesProps {
  title: string;
  valueCard: string;
  typeCard: string;
  children?: ReactNode;
}

function CardViewValues({ title, typeCard, valueCard }: CardViewValuesProps) {
  return (
    <div className="life__card" data-type={typeCard}>
      <h1 className="life__card__title">{title}</h1>
      <span className="life__card__value">R$ {valueCard}</span>
    </div>
  );
}

export default CardViewValues;
