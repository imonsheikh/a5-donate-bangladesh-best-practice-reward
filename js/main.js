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


const addToDonateHistory = (amountBalance, cardTitle) =>{
   const historyContainer = document.getElementById('history-container')

   const historyEntry = document.createElement('div')
   historyEntry.classList.add('border', 'p-4', 'rounded-lg', 'shadow-sm')
   historyEntry.innerHTML = `
   <h3 class ="font-semibold">Title: ${cardTitle}</h3>
   <p>Donation Amount: ${amountBalance}</p>
   <p>Date: ${new Date().toLocaleString()}</p>
   <p>Date: ${new Date().toDateString()}</p>
   <p>Date: ${new Date().toLocaleDateString()}</p>
   <p>Date: ${new Date().toLocaleTimeString()}</p>
   `

   historyContainer.appendChild(historyEntry)
}


// Function 2 
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

const cardTitle = cardElement.querySelector('.card-title').innerText
// console.log(cardTitle);
addToDonateHistory(amountBalance, cardTitle);

cardElement.querySelector('input').value= ""
document.getElementById('show-modal-btn').showModal()

}



const updateNavbarBalance = (amountBalance) =>{
// console.log(amountBalance);
const navbarBalance = parseFloat(document.getElementById('balance').innerText)
// console.log(navbarBalance);

const remainingBalance = navbarBalance - amountBalance
// console.log(remainingBalance);

document.getElementById('balance').innerText = remainingBalance.toFixed(2)

}


//history button
document.getElementById('show-history-btn').addEventListener('click', () => {

    document.getElementById('show-donation-btn').classList.remove('active')
    document.getElementById('show-history-btn').classList.add('active')
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.remove('hidden')

})


//donation button
document.getElementById('show-donation-btn').addEventListener('click', () => {

    document.getElementById('show-donation-btn').classList.add('active')
    document.getElementById('show-history-btn').classList.remove('active')
    document.getElementById('donation-container').classList.remove('hidden')
    document.getElementById('history-container').classList.add('hidden')

})