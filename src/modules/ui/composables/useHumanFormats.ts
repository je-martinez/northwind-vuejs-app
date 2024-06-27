import { useIntl } from "vue-intl";

export function useHumanFormats() {
  const intl = useIntl();

  const getFormattedCurrency = (value: number) => {
    return intl.formatNumber(value, { style: "currency", currency: "USD" });
  };

  const getFormattedNumber = (value: number) => {
    return intl.formatNumber(value, {
      minimumFractionDigits: 2,
    });
  };
  return { getFormattedCurrency, getFormattedNumber };
}
