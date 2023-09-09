var initialPrice = document.querySelector('#initial-price');
var quantity = document.querySelector('#quantity');
var currentPrice = document.querySelector('#current-price');
var btnSubmit = document.querySelector('#btn-submit')
var outputEl = document.querySelector('#output');

function calculateLossAndProfit(initialPrice, quantity, currentPrice) {
    if (initialPrice > currentPrice) {
        const loss = (initialPrice - currentPrice) * 100;
        const lossPercentage = (loss / (initialPrice * quantity)) * 100;
        outputEl.style.color="red";
        outputEl.innerText = `Whoops!! Your loss is ${loss.toFixed(2)} and loss Percentage is ${lossPercentage.toFixed(2)}%`;

    }
    else if (initialPrice < currentPrice) {
        const profit = (currentPrice - initialPrice) * quantity;
        const profitPercentage = (profit / (initialPrice * quantity)) * 100;
        outputEl.style.color="green";
        outputEl.innerText = `Yay!! Your Profit is ${profit.toFixed(2)} and profit Percentage is ${profitPercentage.toFixed(2)}%`;
    }
    else {
        outputEl.innerText = "No profit or loss";
    }
}
function getValues() {
    var ip = initialPrice.value;
    var qty = quantity.value;
    var curr = currentPrice.value;
    calculateLossAndProfit(ip, qty, curr)
}
btnSubmit.addEventListener('click', getValues)