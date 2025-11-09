function largestNum(num1, num2, num3) {
  let largest = num1;

  if (num2 > largest) {
    largest = num2;
  }
  if (num3 > largest) {
    largest = num3;
  }

  return largest;
}

console.assert(largestNum(5, 3, 7) === 7, "largest number in third position");
console.assert(
  largestNum(9, 15, 10) === 15,
  "largest number in second position"
);
console.assert(
  largestNum(52, 14, 17) === 52,
  "largest number in first position"
);
console.assert(
  largestNum(9.5, 15.8, 10.6) === 15.8,
  "largest number from decimal numbers"
);
console.assert(
  largestNum(-9, -4, -12) === -4,
  "largest number from negative numbers"
);
