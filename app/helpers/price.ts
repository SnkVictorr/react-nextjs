// Pastas helpers cria funções complementares

interface Product {
  price: number;
  discountPercentage: number;
}

export const calculateProductTotalPrice = (product: Product): number => {
  if (product.discountPercentage === 0) {
    return product.price;
  }
  const discount = product.price * (product.discountPercentage / 100);
  return product.price - discount;
};

export const formatCurrentBR = (value: number): string => {
  return `${Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value)}`;
};
