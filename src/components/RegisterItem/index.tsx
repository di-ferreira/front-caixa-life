import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      <td className="date">{formatDate(Item.createDate)}</td>
      <td className="title">{Item.title}</td>
      <td className="value">{formatCurrency(Item.value)}</td>
      <td>
        {Item.inflows ? (
          <span data-type="entrada">Entrada</span>
        ) : (
          <span data-type="saida">Saída</span>
        )}
      </td>
      <td className="user">{Item.userName}</td>
      <td className="open">
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </td>
    </>
  );
}

export default RegisterItem;
