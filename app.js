const dateOfBirth = document.querySelector("#birthday")
const luckyNumber = document.querySelector("#lucky-no")
const checkButton = document.querySelector("#check-number")
const outputMsg = document.querySelector("#output-msg")


function checkBirthdayIsLucky(){
    outputMsg.style.display = "block"
    const dob = dateOfBirth.value
    const sum = calculateSum(dob)
    if(sum % luckyNumber.value === 0 ) {
        outputMsg.innerText = "Your birthday is lucky";

    }else{
        outputMsg.innerText = "Your birthday is not lucky";
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","")
    let sum = 0
    for(let i=0;i<dob.length;i++) {
        sum = sum + Number(dob.charAt(i))
    }
    return sum
}

checkButton.addEventListener('click', checkBirthdayIsLucky )

