let item = ["Egg", 0.25, 12];

const [name, price, quantity] = item;

// let name = item[0];
// let price = item[1];
// let quantity = item[2];

function mergeObjects(a, b) {
  const obj = { ...a, ...b };
  return obj;
}

function mergeObjectsEx(...obj) {
  let result = {};
  for (i = 0; i < obj.length; i++) {
    result = { ...result, ...obj[i] };
  }
  return result;
}

console.log(
  mergeObjectsEx(
    { one: 1, two: 2 },
    { three: 3, four: 4 },
    { five: 5 },
    { one: 6 }
  )
);
