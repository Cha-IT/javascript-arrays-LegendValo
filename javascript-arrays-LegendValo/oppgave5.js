function fyllOppTilTall(maksTall) {
  let arr = [];
  for (let i = 1; i <= maksTall; i++) {
    arr.push(i);
  }
  return arr;
}

let tallArray = fyllOppTilTall(100);
console.log("Fylte array:", tallArray);

function trekkUtenTilbakelegging(arr, antall) {
  let kopi = [...arr];
  let trukket = [];

  for (let i = 0; i < antall; i++) {
    let indeks = Math.floor(Math.random() * kopi.length);
    trukket.push(kopi.splice(indeks, 1)[0]);
  }

  console.log("Original array før trekking:", arr);
  console.log("Tall trukket:", trukket);
  console.log("Array etter trekking:", kopi);
}

trekkUtenTilbakelegging(tallArray, 10);

