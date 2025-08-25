const pinNumber = 1234;

// reusable function to get input number value
function getInputValueNumber(id){
    const InputValueNumber = parseInt(document.getElementById(id).value);
    return InputValueNumber;
}
// function to get input value
function getInputValue(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}
// function to get innertext
function getInnerText(id){
   const innerText = parseInt(document.getElementById(id).innerText);
   return innerText;
}




// add money functionality

document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault();
   const bankValue = getInputValue("bank")
   const accountNumberValue = getInputValue("accoun-number")
   const addPinValue = getInputValueNumber("add-pin");
   const addAmountValue = getInputValueNumber("add-amount");
   const availableBalanceValue = getInnerText("available-balance")

   if(accountNumberValue.length < 11){
    alert("please provide a valid account number");
    return;
   }

   if(addPinValue !== pinNumber){
    alert("please provide a valid pin");
    return;
   }



   const totalAvailableBalance = addAmountValue + availableBalanceValue;
   document.getElementById("available-balance").innerText = totalAvailableBalance;
  
})

// cash out functionality
document.getElementById("withdraw-btn").addEventListener('click', function(e){
    e.preventDefault();
    const agentNumberValue = getInputValue("agent-number");

    const amountValue = getInputValueNumber("withdraw-amount");

    const pinValue = getInputValueNumber("withdraw-pin")

    const availableBalanceValue = getInnerText("available-balance")
    if(agentNumberValue.length< 11){
        alert("please enter valid number");
        return;
    }

    if(pinValue!== pinNumber){
        alert("please enter valid pin");
        return;
    }

    const totalAvailableBalance = availableBalanceValue - amountValue;
    document.getElementById("available-balance").innerText= totalAvailableBalance;
})

// toggling feature

// add-money toggling
document.getElementById("add-money")
.addEventListener('click', function(){
     document.getElementById("add-money-parent").style.display="block"
     
    document.getElementById("cash-out-parent").style.display="none"

    document.getElementById("transfer-money-parent").style.display="none"

    document.getElementById("get-bonus-parent").style.display="none"

    document.getElementById("pay-bill-parent").style.display="none"

    document.getElementById("transaction-parent").style.display="none"
})
// cash-out toggling
document.getElementById("cash-out")
.addEventListener('click', function(){
    document.getElementById("cash-out-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"

    document.getElementById("transfer-money-parent").style.display="none"

    document.getElementById("get-bonus-parent").style.display="none"

    document.getElementById("pay-bill-parent").style.display="none"

    document.getElementById("transaction-parent").style.display="none"
})
// transfer-money toggling
document.getElementById("transfer-money")
.addEventListener('click', function(){
    document.getElementById("transfer-money-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"

    document.getElementById("cash-out-parent").style.display="none"

    document.getElementById("get-bonus-parent").style.display="none"

    document.getElementById("pay-bill-parent").style.display="none"

    document.getElementById("transaction-parent").style.display="none"
    
})
// get bonus toggling
document.getElementById("get-bonus")
.addEventListener('click', function(){
    document.getElementById("get-bonus-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"

    document.getElementById("cash-out-parent").style.display="none"

    document.getElementById("transfer-money-parent").style.display="none"

    document.getElementById("pay-bill-parent").style.display="none"

    document.getElementById("transaction-parent").style.display="none"
    
})
// pay bill toggling   
document.getElementById("pay-bill")
.addEventListener('click', function(){
    document.getElementById("pay-bill-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"

    document.getElementById("cash-out-parent").style.display="none"

    document.getElementById("transfer-money-parent").style.display="none"

    document.getElementById("get-bonus-parent").style.display="none"

    document.getElementById("transaction-parent").style.display="none"
    
})
// transaction toggling
document.getElementById("transaction")
.addEventListener('click', function(){
    document.getElementById("transaction-parent").style.display="block"

    document.getElementById("add-money-parent").style.display="none"

    document.getElementById("cash-out-parent").style.display="none"

    document.getElementById("transfer-money-parent").style.display="none"

    document.getElementById("get-bonus-parent").style.display="none"

    document.getElementById("pay-bill-parent").style.display="none"
    
    
})




