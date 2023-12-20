export const formatPrice = (amount: number) => {
  return Intl.NumberFormat(navigator.language, {
    currency: 'USD',
    style: 'currency',
  }).format(amount);
};
