
import Modal from "./modal.js"
import Visit from "./visit.js"
import VisitCardiologist from "./visitCardiologist.js"

 export class createCard extends Modal{
  constructor(){
  super()
  
  this._submitButton = document.createElement('input')
  this.select = document.createElement('select')
 
 }
  
  createElements(){
  super.createElements()
  this._submitButton.type = 'submit'
  this.select.size = 3;
  this._submitButton.value = 'Подтвердить';
   
  this._mainContainer.append(this.select)
  this.select.insertAdjacentHTML('beforeend',`
  <option disabled>Выберите доктора</option>
  <option value="">Терапевт</option>
  <option value="">Стоматолог</option>
  <option value="">Кардиолог</option>
  `)
  this.select.addEventListener("change", function(){
                 
      const l56 = this.options[this.selectedIndex].text;
         console.log(l56)
        const submitForm = document.querySelector('.submit_form')
       if(submitForm){
           submitForm.remove()
       }
     new VisitCardiologist().render('.modal__main-container')
  
       });
  }
  render(selector){
      this.createElements();
      
              document.querySelector(selector).append(this._modalElement);
  }
  
  }
  
export  default createCard
  


