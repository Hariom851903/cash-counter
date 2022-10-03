const billAmt=document.getElementById('bill-amt');
const cashAmt=document.getElementById('cash-given');
const checkBtn=document.querySelector('#submit-btn');
var errorMsg=document.querySelector('#error');
var noOfnotes=document.querySelectorAll('.no-of-notes');
// console.log(noOfnotes);


checkBtn.addEventListener('click',clickHandler);

const availableNotes=[2000,500,200,100,50,20,10,5,1];
console.log(availableNotes.length)

function clickHandler(){
    validateBill();

}

function validateBill(){
    var bill=Number(billAmt.value);
    var cash=Number(cashAmt.value);
    if(bill>0){
        if(cash>=bill){
            hideMessage();
            calculateChange(bill,cash);

        }
        else{
            showOutput("Cash given should be greater or equal to bill amount");
        }

    }
    else{
        showOutput("The Bill Amount Should Be Greater Than 0");
       
    }
}

//processing part
//logic
function calculateChange(bill,cash){
    var returnAmt=cash-bill;
    for(var i=0;i<availableNotes.length;i++){
        const countOfnotes=Math.trunc(returnAmt/availableNotes[i]);
        returnAmt=returnAmt%availableNotes[i];
        noOfnotes[i].innerText=countOfnotes;
    }

}

function hideMessage(){
    errorMsg.style.display="none";

}

function showOutput(message){
    errorMsg.style.display="block";
    errorMsg.innerHTML=message;
    errorMsg.style.color="red";

}