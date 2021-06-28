// Data:
const doors = {
    1: { product: "car", price: 50000 },
    2: { product: "blender", price: 50 },
    3: { product: "set of knives", price: 120 },
    4: { product: "holiday to Florida", price: 4000 },
    5: { product: "bottle of champagne", price: 150 },
    6: { product: "a goat", price: 30 },
    7: { product: "PlayStation 5 with 3 games", price: 500 },
    8: { product: "4k plasma television", price: 3900 },
    9: { product: "fish bowl", price: 40 },
    10: { product: "bluetooth speaker", price: 65 },
};
// doubles
doubleDoors = [];

//delete:
let arr = []
// Deuren:
let choiceOne = prompt('Kies een deur 1 t/m 10');
let intOne = parseInt(choiceOne);
intOne > 10 ? null : arr.push(intOne);
console.log(intOne)

let choiceTwo = prompt('Kies een deur 1 t/m 10');
let intTwo = parseInt(choiceTwo);
let two = (intTwo == choiceOne);
if(intTwo > 10)
{
    arr.pop();
}else{
    doubleDoors.push(two);
    arr.push(intTwo);
}


let choiceThree = prompt('Kies een deur 1 t/m 10');
let intThree = parseInt(choiceThree);
let three = (intTwo || choiceOne) == intThree;
if(intThree > 10)
{
    arr.pop();
}else{
    doubleDoors.push(three);
    arr.push(intThree);
}

let choiceFour = prompt('Kies een deur 1 t/m 10')
let intFour = parseInt(choiceFour);
let four = (
	intOne == intFour || 
    intTwo == intFour ||
    intThree == intFour
    );
if(intFour > 10)
{
    arr.pop();
}else{
    doubleDoors.push(four);
    arr.push(intFour);
}

// de winnaar mag een deur niet twee keer kiezen. Als ze dat toch doet krijgt ze een prijs minder
let check = (
	true == doubleDoors[0] ||
    true == doubleDoors[1] ||
    true == doubleDoors[2]
    );


check == true ? arr.pop() : null;
console.log(arr)

/* ints */

/* total ints */
let totalInts = [];

totalInts.push(intOne);
totalInts.push(intTwo);
totalInts.push(intThree);
totalInts.push(intFour);

const prices = [];
let totalPrice = 0;

const products = []; 
// show the choices
let choicePriceOne = arr[0];
let choicePriceTwo = arr[1]
let choicePriceThree = arr[2];
let choicePriceFour = arr[3];

// show te prices
doors[choicePriceOne] !== undefined ? prices.push(doors[choicePriceOne].price) : null;
doors[choicePriceTwo] !== undefined ? prices.push(doors[choicePriceTwo].price) : null;
doors[choicePriceThree] !== undefined ? prices.push(doors[choicePriceThree].price) : null;
doors[choicePriceFour] !== undefined ? prices.push(doors[choicePriceFour].price) : null;

doors[choicePriceOne] !== undefined ? products.push(doors[choicePriceOne].product) : null;
doors[choicePriceTwo] !== undefined ? products.push(doors[choicePriceTwo].product) : null;
doors[choicePriceThree] !== undefined ? products.push(doors[choicePriceThree].product) : null;
doors[choicePriceFour] !== undefined ? products.push(doors[choicePriceFour].product) : null;

prices[0] !== undefined ? totalPrice = totalPrice + prices[0] : null;
prices[1] !== undefined ? totalPrice = totalPrice + prices[1] : null;
prices[2] !== undefined ? totalPrice = totalPrice + prices[2] : null;
prices[3] !== undefined ? totalPrice = totalPrice + prices[3] : null;
alert('total price:' + totalPrice);
console.log()
alert('total products:'+ JSON.stringify(products));



