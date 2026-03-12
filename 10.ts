/*
  10.ts  interfaces and structural typing
*/

interface Products {
  name: string;
  price: number;
}

const shirt: Products = {
  name: "HRX",
  price: 3000,
};

// interfaces can be extended or implemented by classes
interface DiscountedProduct extends Products {
  discount: number;
}

const discountedShirt: DiscountedProduct = {
  name: "HRX Pro",
  price: 5000,
  discount: 500,
};

function calculateFinalPrice(p: Products) {
  console.log(`${p.name} final price: ${p.price}`);
}

calculateFinalPrice(shirt);
calculateFinalPrice(discountedShirt);
