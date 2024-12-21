import { getUser } from "./users.js";


// const search = window.location.search.slice(6)  //i chose this method to extract the value of the query params
const search = new URLSearchParams(window.location.search) // this method is to access the key and value in the query params

const userId = parseInt(search.get("user"))

if(!isNaN(userId) && userId < 31 && userId > 0){

    const user = await getUser(userId);
    
    const userNameEl = document.querySelector(".user-name")
    
    userNameEl.innerText = `HELLO! ${user.firstName} ${user.lastName}`


}else{
    window.location.href = "/"   // navigates to home page or root directory of the domain

}







