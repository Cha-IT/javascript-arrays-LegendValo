function reverserArray(arr) {
  let reversert = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversert.push(arr[i]);
  }
  return reversert;
}

let eksempelArray = [1, 2, 3, 4, 5];
console.log("Original:", eksempelArray);
console.log("Reversert:", reverserArray(eksempelArray));
