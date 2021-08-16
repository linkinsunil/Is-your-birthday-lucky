const birthDay = document.querySelector("#birthday")
const luckyNumber = document.querySelector("#lucky-number")
const button = document.querySelector("#btn-check")
const message = document.querySelector("#message")

button.addEventListener("click", checkLuckyBirthDay)

function checkLuckyBirthDay(){
    const dob = birthDay.value;
    const sum = calculateSum(dob)
    console.log(sum)
}

function calculateSum (dob){
    dob = dob.replaceAll("-", "");
    let sum = 0;
    for (let i=0; i<dob.length; i++){
        sum = sum + Number(dob.charAt(i))
    }

    return sum

}