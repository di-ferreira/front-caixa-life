import { createIntl, createIntlCache } from "@formatjs/intl";

const cache = createIntlCache();

const intl = createIntl({ locale: "pt-br", messages: {} }, cache);

export const formatCurrency = (value: number) => {
  return intl.formatNumber(value, { style: "currency", currency: "BRL" });
};

export const formatDate = (date: string | number | Date) => {
  let newDate: Date = new Date(date.toString());
  return intl.formatDate(newDate, {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
};
