function updatePhoneNumber(isIncrease){
    const phoneNumberfield = document.getElementById('phone-number-field')
    const phoneNumberfieldString = phoneNumberfield.value;
    const previousPhoneNumber = parseInt(phoneNumberfieldString);

   let newPhoneNumber;

   if(isIncrease){
         newPhoneNumber = previousPhoneNumber + 1;
   }
   else{
         newPhoneNumber = previousPhoneNumber - 1;
   }
   phoneNumberfield.value = newPhoneNumber;

   return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phoneTotalPrice = newPhoneNumber * 1219;
   const phoneTotalElement = document.getElementById('phone-total');
   phoneTotalElement.innerText = phoneTotalPrice;

};



document.getElementById('btn-phone-plus').addEventListener('click', function(){
   const newPhoneNumber = updatePhoneNumber(true);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();

   
});

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);

    updatePhoneTotalPrice(newPhoneNumber);
    calculateSubTotal();


});