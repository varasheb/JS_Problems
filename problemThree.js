
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

