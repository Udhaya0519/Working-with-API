import { getAllUsers } from "./users.js";

const usersDisplay = document.querySelector(".users-container")

const users = await getAllUsers();

users.map(( user ) => {
    // console.log(user);

    usersDisplay .innerHTML += 
    `<a href="./userInfo.html?user=${user.id}" class="user">
            <h4 class="user-name">${user.firstName} ${user.lastName} <span class="user-age">(${user.age})</span></h4>
            <h5 class="user-email">${user.email}</h5>
    </a>`        
        
})





