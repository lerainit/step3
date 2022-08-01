
import instance from "./instance.js"

 const getCards = async () =>{
const {status,data} = await instance.get('')
console.log(data)
return data
 }

 export default getCards;