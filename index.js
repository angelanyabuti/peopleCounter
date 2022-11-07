let count = 0
//grabbing welcome-el paragraph
let welcomeEl=document.getElementById("welcome-el")
let name="Jane"
let greeting="Hello "
let myGreeting=greeting+ name
welcomeEl.innerText=myGreeting

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
//called when the button is clicked
function increment()
{
    count += 1
    countEl.innerText = count

}

function save(){
    let countStr= count + " - "
    saveEl.textContent  += countStr
    countEl.textContent = 0
    count=0
    console.log(count)
}

save()
let username = "per"
let messasge="you have new notifications"

let messageToUser=messasge+" "+username

console.log(messageToUser)
