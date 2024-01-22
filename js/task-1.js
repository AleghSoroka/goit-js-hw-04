function isEnoughCapacity(products, containerSize) {
  const arrayQuantities = Object.values(products);
  let totalQuantity = 0;

  //Using "for of" method:
  // for (const quantity of arrayQuantities) {
  //    totalQuantity += quantity;
  // }

  //Using "forEach(callback)" method:
  arrayQuantities.forEach(function (quantity) {
    totalQuantity += quantity;
  });
  return totalQuantity <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true

console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
