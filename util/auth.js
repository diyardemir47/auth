import axios from "axios"


const API_KEY='AIzaSyCXRq0lwUS7FvIcVhEjBf2CwB1JxQkQhyg';
async function createUser(email,password) {

   const response= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+API_KEY, {

    email:email,
    password:password,
    returnSecureToken:true,
    })
}