// console.log('cone');
const donateBtns = document.querySelectorAll('.donate-btn')
// console.log(donateBtns);

// //Method 1
// for(const element of donateBtns){
//     console.log(element);
    
// }

//Method 2
donateBtns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) =>{
    //    console.log(e.target);
       handleDonate(e.target)
    })
      
})

const handleDonate = (button) =>{
// console.log(button); 
const cardElement = button.closest(".card")
// console.log(cardElement);

const amountBalance = parseFloat(cardElement.querySelector('.input').value)
const navbarBalance = parseFloat(document.getElementById('balance').innerText)

//validation
if(isNaN(amountBalance) || amountBalance <= 0 || amountBalance > navbarBalance){
alert('Please give valid input')
return
}

updateNavbarBalance(amountBalance);

const cardsBalance = parseFloat(cardElement.querySelector('.card-balance').innerText)
// console.log(cardsBalance);

const newCardBalance = cardsBalance + amountBalance
console.log(newCardBalance);
cardElement.querySelector('.card-balance').innerText = newCardBalance.toFixed(2)


cardElement.querySelector('input').value= ""

}

const updateNavbarBalance = (amountBalance) =>{
// console.log(amountBalance);
const navbarBalance = parseFloat(document.getElementById('balance').innerText)
// console.log(navbarBalance);

const remainingBalance = navbarBalance - amountBalance
// console.log(remainingBalance);

document.getElementById('balance').innerText = remainingBalance.toFixed(2)

}
