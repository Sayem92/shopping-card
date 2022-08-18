/* 
1. get the case btn plus and add addeventlistener to click
2. get the input field value 
3. convert the number to a integer
4. calculate the new case number 
5. set the new case number to the input field
*/

function updateCaseNumber(isIncrease){
       const caseNumberField = document.getElementById('case-number-field')
   const caseNumberFieldString = caseNumberField.value ;
   const previousCaseNumber = parseInt(caseNumberFieldString)

   let newCaseNumber;

   if(isIncrease == true){
        newCaseNumber = previousCaseNumber + 1;
   }
   else{
        newCaseNumber = previousCaseNumber - 1 ;
   }
   caseNumberField.value = newCaseNumber;

   return newCaseNumber;
}

function  updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
   const caseTotalElement = document.getElementById('case-total');
   caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
//    const caseNumberField = document.getElementById('case-number-field')
//    const caseNumberFieldString = caseNumberField.value ;
//    const previousCaseNumber = parseInt(caseNumberFieldString)

//    const newCaseNumber = previousCaseNumber + 1;
//    caseNumberField.value = newCaseNumber;

   const newCaseNumber = updateCaseNumber(true);

//    const caseTotalPrice = newCaseNumber * 59;
//    const caseTotalElement = document.getElementById('case-total');
//    caseTotalElement.innerText = caseTotalPrice;

        updateCaseTotalPrice(newCaseNumber)
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
//    const caseNumberField = document.getElementById('case-number-field')
//    const caseNumberFieldString = caseNumberField.value ;
//    const previousCaseNumber = parseInt(caseNumberFieldString)

//    const newCaseNumber = previousCaseNumber - 1;
//    caseNumberField.value = newCaseNumber;

    const newCaseNumber = updateCaseNumber(false)

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText = caseTotalPrice;

    updateCaseTotalPrice(newCaseNumber)
})