function getInputValue(inputID){
    const depositInput = document.getElementById(inputID);
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
     //clear deposit input field
   depositInput.value = ' '
    return newDepositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function(){
//    get the deposit amount
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText); 

    const newDepositAmount = getInputValue('deposit-input')

   const depositTotal = document.getElementById('deposit-total');
   const previousDepositAmountText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDepositAmountText)
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

//    update account balance

const balanceTotal = document.getElementById('balance-total');
const balanceTotalText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(balanceTotalText)

const newBalanceTotal = previousBalanceTotal + newDepositAmount
balanceTotal.innerText = newBalanceTotal

  
  
})

// handel withDraw 

document.getElementById('withDraw-button').addEventListener('click',function(){
    const withDrawInput = document.getElementById('withDraw-input');
    const withDrawAmountText = withDrawInput.value;
    const newWithDrawAmount = parseFloat(withDrawAmountText);

    // set withDraw Total

    const withDrawTotal = document.getElementById('withDrawTotal');
    const previousWithDrawText = withDrawTotal.innerText;
    const previousWithDrawTotal = parseFloat(previousWithDrawText);
    const newWithDraWTotal = previousWithDrawTotal + newWithDrawAmount;

    withDrawTotal.innerText = newWithDraWTotal;

    // clear withDraw total

    withDrawInput.value =" "

    //    update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount - newWithDraWTotal;
    balanceTotal.innerText = newBalanceTotal;

})