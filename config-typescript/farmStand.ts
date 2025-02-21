interface Product {
  price: number;
  name: string;
  quantity: number;
}

const printProduct = (): Product => {
  return { price: 55, name: "Bob", quantity: 1 };
};
