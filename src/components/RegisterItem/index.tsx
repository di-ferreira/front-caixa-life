/* eslint-disable react/style-prop-object */
import { IntlProvider, FormattedNumber } from "react-intl";
export interface IRegisterItem {
  id?: number;
  title: string;
  value: number;
  inflows: boolean;
  createDate: Date;
  userName: string;
}

function RegisterItem(Item: IRegisterItem) {
  const messagesInFrench = {
    myMessage: "Aujourd'hui, c'est le {ts, date, ::yyyyMMdd}",
  };

  return (
    <IntlProvider messages={messagesInFrench} locale="fr" defaultLocale="en">
      <h1>{Item.title}</h1>
      <p>
        <span>
          <FormattedNumber value={Item.value} style="currency" currency="EUR" />
        </span>
        <span>{Item.inflows ? "Entrada" : "Saída"}</span>
        <span>{Item.createDate}</span>
        <span>{Item.userName}</span>
      </p>
    </IntlProvider>
  );
}

export default RegisterItem;
