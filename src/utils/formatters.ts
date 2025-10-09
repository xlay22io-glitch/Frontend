export const formatNumber = (value: string | number | undefined): string => {
  if (!value) return "0.00";
  return Number.parseFloat(value.toString()).toFixed(2);
};
