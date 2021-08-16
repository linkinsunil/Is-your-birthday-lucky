const birthDay = document.querySelector("#birthday")
const luckyNumber = document.querySelector("#lucky-number")
const button = document.querySelector("#btn-check")
const message = document.querySelector("#message")

button.addEventListener("click", checkLuckyBirthDay)

function compareValues(sum, luckyNumber){
    if(sum % luckyNumber === 0){
        message.innerText = "Yay, your birthday is lucky for you :)"
    } else {
        message.innerText = "Uh oh! your birthday is not so lucky for you :("
    }
}

function checkLuckyBirthDay(){
    const dob = birthDay.value;
    const sum = calculateSum(dob)
    if(sum && dob){
        compareValues(sum, luckyNumber.value)
    } else {
        message.innerText = "Please enter both the fields :|"
    }
}

function calculateSum (dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }

    return sum

}