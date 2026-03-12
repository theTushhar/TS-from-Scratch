enum Sizes {
  Small = 1,
  Medium = 2,
  Large = 3,
}

console.log(Sizes.Small); // 1
console.log(Sizes.Medium); // 2
console.log(Sizes.Large); // 3

// Sizes.Large = 4; // Enums are mutable, but this is generally not recommended
console.log(Sizes.Large); // 3

function setProductSize(Sizes: Sizes) {}

setProductSize(Sizes.Medium); // valid
// setProductSize(5); // Error: Argument of type '5' is not assignable to parameter of type 'Sizes'

console.log(Sizes); // { Small: 1, Medium: 2, Large: 3 }
