enum height1 {
  Small = 1,
  Medium = 2,
  Large = 3,
}

class InventoryItem {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  buy(): this {
    console.log(this.price);
    return this;
  }
}

class Product1 extends InventoryItem {
  color: string = "red";
  height1?: height1 | undefined;
}

const newproduct = new Product1("Shirt", 29.99);
newproduct.height1 = height1.Medium;
newproduct.color = "blue";
newproduct.buy();
