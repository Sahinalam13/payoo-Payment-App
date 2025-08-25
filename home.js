const pinNumber = 1234;
const transactionData = [];

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
// function set inner text
function setInnerText(value){
    const availableBalnceElement = document.getElementById("available-balance").innerText;
    availableBalnceElement= value;
}

// function to toggling
function handleToggle(id){
    const forms = document.getElementsByClassName("form");
    for(const form of forms){
        form.style.display ="none"
    }
    document.getElementById(id).style.display="block"
}
// function to btn toggling
function handleFormBtn(id){
     const formBtns = document.getElementsByClassName("formbtn");
   for(const btn of formBtns){
    btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
    btn.classList.add("border-gray-300")
   }
   document.getElementById(id).classList.remove("border-gray-300")
   document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
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

   const data ={
    name: "Add Money",
    date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
  
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
   handleToggle("add-money-parent")

   handleFormBtn("add-money") 
})
// cash-out toggling
document.getElementById("cash-out")
.addEventListener('click', function(){
   handleToggle("cash-out-parent")

   handleFormBtn("cash-out")

})
// transfer-money toggling
document.getElementById("transfer-money")
.addEventListener('click', function(){
    handleToggle("transfer-money-parent")

    handleFormBtn("transfer-money")
    
})
// get bonus toggling
document.getElementById("get-bonus")
.addEventListener('click', function(){
   handleToggle("get-bonus-parent")

   handleFormBtn("get-bonus")
    
})
// pay bill toggling   
document.getElementById("pay-bill")
.addEventListener('click', function(){
    handleToggle("pay-bill-parent")

    handleFormBtn("pay-bill")
    
})
// transaction toggling
document.getElementById("transaction")
.addEventListener('click', function(){
    handleToggle("transaction-parent")

    handleFormBtn("transaction")
    
    
})




