/*
  12.ts  interfaces, extension, optional properties, and functions
*/

interface InventoryItem {
  name: string;
  price: number;
  quantity: number;
}

// extend InventoryItem for physical products
interface Product extends InventoryItem {
  color?: string; // optional property
}

// services also share base inventory fields
interface ServiceItem extends InventoryItem {
  startTime: Date;
  endTime: Date;
}

const longShirt: Product = {
  name: "HRX",
  price: 3000,
  quantity: 5,
  color: "red",
};

const photoshoot: ServiceItem = {
  name: "Photoshoot",
  price: 5000,
  quantity: 1,
  startTime: new Date(),
  endTime: new Date(),
};

function purchaseItem(item: InventoryItem, quantity: number) {
  // simple purchase calculation
  console.log(
    `You have purchased ${quantity} ${item.name}(s) for a total of ${
      item.price * quantity
    }`,
  );
}

purchaseItem(longShirt, 2);
purchaseItem(photoshoot, 1);
