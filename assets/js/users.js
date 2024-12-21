
const USERS_URL = 'https://dummyjson.com/users'

const SINGLE_USER_URL = 'https://dummyjson.com/users/'



export async function getAllUsers(){
    const fetchedData = await fetch(USERS_URL)
    const userData = await fetchedData.json()
    return userData.users
}

export async function getUser(userID){
    const singleFetchedData = await fetch(SINGLE_USER_URL + userID) // this userID is to get the mentioned single user info
    const singleUserData = await singleFetchedData.json()
    return singleUserData
}

