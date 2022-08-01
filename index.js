import Card from "./card.js";
import Modal from "./modal.js";
import createCard from "./createCard.js";
import Login from "./login.js";
import Visit from "./visit.js";
import instance from "./instance.js";
//import VisitDentist from "./visitDentist.js";
//import VisitTherapist from "./visitTherapist.js";
//import VisitCardiologist from "./visitCardiologist";


const container = document.querySelector('.container')

const loginBtn = document.querySelector('.login_btn')
function createCards(){
new createCard().render('.container')
    
}

function createLogin(){
loginBtn.removeEventListener('click',createLogin)

   const login = new Login()


login.render('.container')

login.submitLogin() 

loginBtn.addEventListener('click',createCards)
}

loginBtn.addEventListener('click',createLogin)


