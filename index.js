const billAmount =  document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#Cash-given");
const checkButton = document.querySelector("#Check-button");
const message = document.querySelector("#error-Message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5];

checkButton.addEventListener("click", function validateBillAndCashAmount(){
    hideMessage();
    if (billAmount.value > 0){
        if(cashGiven.value >= billAmount.value){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            calculateChange(amountToBeReturned);
        }else{
            showMessage("Give me the balance amount");
        }
    }else{
       showMessage("Invalid Bill Amount");

    }
});

function calculateChange(amountToBeReturned){
    // go over all the available
    for (let i = 0; i < availableNotes.length; i++ ){
        // no of notes need for the denomination
        const numberOfNotes = Math.trunc(
            amountToBeReturned / availableNotes[
                i]
        );
        // amount left after calculating the number of notes needed
        amountToBeReturned = amountToBeReturned % availableNotes[i];
    
    
        //Updating the no of notes in the lable for the current amount   
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function hideMessage(){
    message.style.display = "none";

}
function showMessage(msg) {
    message.style.display = "block";
    message.style.color = "red";
    message.innerText = msg;
}