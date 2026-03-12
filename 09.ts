/*
  09.ts  using type aliases to describe object shapes
*/

type Product = {
  name: string;
  price: number;
};

const tshirt: Product = {
  name: "HRX",
  price: 3000,
};

// You can reuse the Product alias elsewhere
function printProduct(p: Product) {
  console.log(`Product: ${p.name}, price: ${p.price}`);
}

printProduct(tshirt);
