enum height {
  Small = 1,
  Medium = 2,
  Large = 3,
}

class Product {
  name: string;
  price: number;
  color: string = "red";
  height?: height | undefined;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  buy(): this {
    console.log(this.price);
    return this;
  }
}

const product1 = new Product("Shirt", 29.99);
product1.height = height.Medium;
product1.color = "blue";
product1.buy();
