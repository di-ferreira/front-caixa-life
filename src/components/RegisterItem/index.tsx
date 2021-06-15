import { formatCurrency, formatDate } from "../../utils/format";
export interface IRegisterItem {
  id?: number;
  title: string;
  value: number;
  inflows: boolean;
  createDate: Date;
  userName: string;
}

function RegisterItem(Item: IRegisterItem) {
  return (
    <>
      <h1>{Item.title}</h1>
      <p>
        <span>{formatCurrency(Item.value)}</span>
        <span>{Item.inflows ? "Entrada" : "Saída"}</span>
        <span>{formatDate(Item.createDate)}</span>
        <span>{Item.userName}</span>
      </p>
    </>
  );
}

export default RegisterItem;
