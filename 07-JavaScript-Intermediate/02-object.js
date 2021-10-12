// * Soal 1
const person = {
  name: "person A",
  age: 100,
  favDrinks: ["coffee", "jamu temulawak", "tea"],
  greeting: function () {
    console.log("hello world");
  },
};

/// EDIT HERE
person.name = "Revydo Renada S";
person.favDrinks[1] = "tap water";
person.greeting = function (name) {
  return `Hello, ${name}`;
};
/// STOP

console.log(person.name);
console.log(person.age);
console.log(person.favDrinks);
console.log(person.greeting("John Watson"));

// * Soal 2
function getObjectValue(obj, path) {
  path = path.split(".");
  let key = obj;

  for (let i = 0; i < path.length; i++) {
    const curr = key[path[i]];
    key = curr;
  }
  if (key === undefined) {
    return null;
  }

  return key;
}

const milkBasedCoffee = {
  name: "latte",
  ingredients: {
    espresso: {
      origin: "lampung",
      roastProfile: "medium to dark",
      ratio: 1,
    },
    milk: {
      brand: "susu murni",
      isVegan: false,
      ratio: 5,
    },
  },
};

const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");

console.log(espresso);
console.log(coffeeBrand);
console.log(isMilkVegan);

getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");

// * Soal 3
const items = [
  {
    btc: { buy: 10, sell: 9 },
    eth: { buy: 8, sell: 7.5 },
    doge: { buy: 7, sell: 6.5 },
    day: 1,
  },
  {
    btc: { buy: 9, sell: 5 },
    eth: { buy: 7, sell: 4 },
    doge: { buy: 6, sell: 3 },
    day: 2,
  },
  {
    btc: { buy: 5, sell: 10 },
    eth: { buy: 4, sell: 6 },
    doge: { buy: 3, sell: 4 },
    day: 3,
  },
];

let coba = items[0].btc.sell - items[0].btc.buy;

const calculateIncome = (items) => {
  /// EDIT DOWN HERE
  let sumOfItems = items.reduce(
    (prev, cur) => {
      let sumBtc = cur.btc.sell - cur.btc.buy;
      let sumEth = cur.eth.sell - cur.eth.buy;
      let sumDoge = cur.doge.sell - cur.doge.buy;

      return {
        btc: prev.btc + sumBtc,
        doge: prev.doge + sumEth,
        eth: prev.eth + sumDoge,
      };
    },
    {
      btc: 0,
      doge: 0,
      eth: 0,
    }
  );
  return sumOfItems;
};

console.log(calculateIncome(items));
