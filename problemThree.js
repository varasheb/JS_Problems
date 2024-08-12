// 3. The vending
// machine
// Write a program to calculate the change returned by a vending machine
// when you buy something from it. The coins are numbered by their value in
// paise.
// [1, 5, 10, 25, 50, 100]
// 1 being 1 paise & 100 being 100 paise or 1 Rupee.
// If a person inserted 5 Rs and bought something worth 2.99 Rs then he would get one 1 paise join
// & two 100 paise coins. So the answer will be.
// [1, 0,0, 0, 0, 2]
// Complete the following function
// function getChange(price_of_item. money_given_to_purchase) {
// write code here
// return change
// return [0, 0, 0, 0, 0, 0]
// }

function getChange(itemPrice, moneyGiven) {
    let priceInPaise = Math.round(itemPrice * 100);
    let moneyGivenInPaise = Math.round(moneyGiven * 100);

    let changeToGive = moneyGivenInPaise - priceInPaise;

    let coins = [100, 50, 25, 10, 5, 1];
    let change = [0, 0, 0, 0, 0, 0]; 

    for (let i = 0; i < coins.length; i++) {
        if (changeToGive >= coins[i]) {
            change[i] = Math.floor(changeToGive / coins[i]);
            changeToGive %= coins[i];
        }
    }
    
    return change;
}

let changeRecived=getChange(2.99,5)
console.log(changeRecived);

