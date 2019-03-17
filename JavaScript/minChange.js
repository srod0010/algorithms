

function minChange(coins, amount, memo = {}) {
    if (memo[amount]) return memo[amount];
    if (amount === 0) return 0;
    if (amount < 0) return null;
    // console.log(amount);
    let numCoins = [];
    coins.forEach(coin => {
        let val = 1 + minChange(coins, (amount-coin),memo);
        numCoins.push(val);
    })
    
    memo[amount]= Math.min(...numCoins)
    return memo[amount]
}

console.log(minChange([1,2,5],11));