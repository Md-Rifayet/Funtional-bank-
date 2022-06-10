function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
  
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
      //clear input field
      inputField.value = " "
    return amountValue;
}
function updateTotalField(totalFieldId, depositAmount){
  const totalElement = document.getElementById(totalFieldId);
  const totalText = totalElement.innerText;
  const previousTotal = parseFloat(totalText);

  totalElement.innerText = previousTotal + depositAmount;
}
function getCurrentBalance(){
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}
function updateBalance(amount, isAdd){
  const balanceTotal = document.getElementById("balance-total");
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
if(isAdd == true){
  balanceTotal.innerText = previousBalanceTotal + amount;
}
else{
  balanceTotal.innerText = previousBalanceTotal - amount;
}
}
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input')
    if(depositAmount > 0){
         // get and update deposit total
        updateTotalField("deposit-total", depositAmount)

        // update balance
        updateBalance(depositAmount, true)
    }

});
// handel withDraw button
document.getElementById("withDraw-button").addEventListener('click', function(){
const withDrawAmount = getInputValue('withDraw-input')
const currentBalance = getCurrentBalance();
if(withDrawAmount > 0 && withDrawAmount <= currentBalance){
  //    update withdraw total
updateTotalField('withDraw-Total', withDrawAmount)

// update balance after withDraw
updateBalance(withDrawAmount, false);
}
else{
  window.alert("Insufficient Balance")
}
})