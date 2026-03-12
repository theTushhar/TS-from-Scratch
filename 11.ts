/*
  11.ts  generics with functions, interfaces, and classes
*/

function identity<T>(arg: T): T {
  // generic function returns the same type that was passed in
  return arg;
}

// specifying the type explicitly
let output1 = identity<string>("myString");
// type inference works too
let output2 = identity(42);

console.log(output1, output2);

// generic interface example
interface GenericIdentityFn<T> {
  (arg: T): T;
}

function identity2<T>(arg: T): T {
  return arg;
}

let myIdentity: GenericIdentityFn<number> = identity2;
console.log(myIdentity(100));

// generic class example
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};

console.log(myGenericNumber.add(myGenericNumber.zeroValue, 10));
