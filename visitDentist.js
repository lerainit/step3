import Visit from "./visit.js";

class VisitDentist extends Visit{
    constructor(){
        super()
       
    }
    createElements(){
        super.createElements()
       
       this.form.insertAdjacentHTML('beforeend',`
       <label for="pressure">Дата последнего посещения</label><br>
       <input id ="pressure" type ="text" value=""><br>
      
       `)
    
    }
    render(selector){
        this.createElements()
        document.querySelector(selector).append(this.form);
    }
    
    }
    
    export default VisitDentist;