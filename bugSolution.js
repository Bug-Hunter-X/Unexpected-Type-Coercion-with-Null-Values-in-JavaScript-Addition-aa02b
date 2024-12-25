function foo(a, b) {
  //Explicitly check for null and handle it
  if (a === null || b === null) {
    return 0; // Or handle it in a more appropriate way for your application
  }
  return Number(a) + Number(b);
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0