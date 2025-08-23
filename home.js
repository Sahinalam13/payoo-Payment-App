const pinNumber = 1234;

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