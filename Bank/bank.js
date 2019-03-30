// dispense cash if pin is correct and you have enough money
const displayWithdrawal = document.querySelector('.display-withdrawal');
const displayBalance = document.querySelector('.display-balance');
const info = document.querySelector('.info');
const inputs = document.querySelector('.inputs');
const pinInput = document.querySelector('.pin-input');
const amountInput = document.querySelector('.amount-input');
const submit = document.querySelector('.submit');
const backBtn = document.querySelector('.back');

// get user input
const getInput = () => {
    submit.addEventListener('click', () => {
        // change entered string into number then pass into the cashWithdrawal func
        let pin = parseInt(pinInput.value);
        let amount = parseInt(amountInput.value);
        cashWithdrawal(pin, amount);
    })
}


const cashWithdrawal = (pinNumber, withdrawalAmount) => {
    let totalBalance = 500;
    let pinNum = 1234;
    //regExp to make withdrawal amount numbers only
    let reg = /^\d+$/;

    // check pin is correct
    if (pinNum != pinNumber) {
        inputs.style.display = 'none';
        info.innerHTML = `<span class='error'> Wrong PIN, please try again.</span>`;
        // check pin is correct && withdrawal amount is less than total balance
    } else if ((pinNumber === pinNum) && (withdrawalAmount <= totalBalance)) {
        inputs.style.display = 'none';
        displayWithdrawal.innerHTML = `Withdrawal amount: £${withdrawalAmount}`;
        displayBalance.innerHTML = `Remaining balance: £${totalBalance - withdrawalAmount}`;
        // check if you have enough funds
    } else if ((pinNumber === pinNum) && (withdrawalAmount > totalBalance)) {
        inputs.style.display = 'none';
        info.innerHTML = `<span class='error'>Insufficient funds.`;
        // check withdrawal amount contains numbers only
    } else if (withdrawalAmount != reg) {
        info.innerHTML = `<span class='error'>Please enter a valid amount.</span>`;
    } 
}

getInput();