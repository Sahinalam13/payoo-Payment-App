const pinNumber = 1234;
// add money functionality

document.getElementById("add-money-btn").addEventListener('click', function(e){
    e.preventDefault();
   const bankValue = document.getElementById("bank").value;
   const accountNumberValue = document.getElementById("accoun-number").value;
   const addPinvalue = parseInt(document.getElementById("add-pin").value); 
   const addAmountValue = parseInt(document.getElementById("add-amount").value);
   const availableBalanceValue = parseInt(document.getElementById("available-balance").innerText);

   if(accountNumberValue.length < 11){
    alert("please provide a valid account number");
    return;
   }

   if(addPinvalue !== pinNumber){
    alert("please provide a valid pin");
    return;
   }



   const totalAvailableBalance = addAmountValue + availableBalanceValue;
   document.getElementById("available-balance").innerText = totalAvailableBalance;
  
})

// cash out functionality
document.getElementById("withdraw-btn").addEventListener('click', function(e){
    e.preventDefault();
    const agentNumbervalue = document.getElementById("agent-number").value;

    const amountValue = parseInt(document.getElementById("withdraw-amount").value);

    const pinValue = parseInt(document.getElementById("withdraw-pin").value);

    const availableBalanceValue = parseInt(document.getElementById("available-balance").innerText);

    if(agentNumbervalue.length< 11){
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

    // document.getElementById("transaction-parent").style.display="none"
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




