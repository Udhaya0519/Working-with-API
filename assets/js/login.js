
const LOGIN_URL = 'https://dummyjson.com/user/login'

const userNameInputEl = document.querySelector("#user-name-input")
const userPasswordInputEl = document.querySelector("#user-password-input")
const loginFormEl = document.querySelector(".login-form")

async function loginAuth(userName,password) {
    const fetchAuth = await fetch(LOGIN_URL,{
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({
            username: userName,
            password: password,
        })
    })
    return await fetchAuth.json()
    
}


loginFormEl.addEventListener("submit", async (event) => {
    event.preventDefault();
    
    try {
        const userInfo = await loginAuth(userNameInputEl.value, userPasswordInputEl.value)

        if(userInfo.message === "Invalid credentials"){
            
            alert("Invalid Credentials")
        
        }else{
            
            alert(`Login Successfull! Welcome ${userInfo.firstName} ${userInfo.lastName}`)
            

        }
        loginFormEl.reset()

    } catch (error) {
        console.log(error);
        alert("something went wrong!")
    }
})