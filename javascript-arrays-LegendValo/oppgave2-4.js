function fyllArrayMedTilfeldigeTall(arr, antall) {
  for (let i = 0; i < antall; i++) {
    arr.push(Math.floor(Math.random() * 100) + 1);
  }
}

let tilfeldigeTall = [];
fyllArrayMedTilfeldigeTall(tilfeldigeTall, 50);
console.log("Tilfeldige tall:", tilfeldigeTall);

tilfeldigeTall.sort((a, b) => b - a);
console.log("Sortert synkende:", tilfeldigeTall);

let maks = Math.max(...tilfeldigeTall);
let min = Math.min(...tilfeldigeTall);
console.log("Største tall:", maks);
console.log("Minste tall:", min);

function fjernPartall(arr) {
  return arr.filter(tall => tall % 2 !== 0);
}

let oddetall = fjernPartall(tilfeldigeTall);
console.log("Etter å ha fjernet partall:", oddetall);

let storArray = [];
fyllArrayMedTilfeldigeTall(storArray, 500);

function finnDuplikater(arr) {
  let teller = {};
  let duplikater = [];

  arr.forEach(tall => {
    teller[tall] = (teller[tall] || 0) + 1;
  });

  for (let tall in teller) {
    if (teller[tall] > 1) {
      duplikater.push(Number(tall));
    }
  }

  return duplikater;
}

let duplikater = finnDuplikater(storArray);
console.log("Duplikater:", duplikater);
