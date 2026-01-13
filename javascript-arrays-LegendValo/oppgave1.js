let primtall = [7, 11, 13, 17, 19, 23, 43, 47, 53, 59, 61, 67];

function skrivUtPrimtall(arr) {
  arr.forEach(tall => console.log(tall));
}

// Genererer alle primtall < 100
function erPrimtall(tall) {
  if (tall < 2) return false;
  for (let i = 2; i <= Math.sqrt(tall); i++) {
    if (tall % i === 0) return false;
  }
  return true;
}

primtall = [];
for (let i = 2; i < 100; i++) {
  if (erPrimtall(i)) {
    primtall.push(i);
  }
}

skrivUtPrimtall(primtall);
