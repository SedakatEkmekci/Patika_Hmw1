import axios from "axios";
//console.log("success");
async function getData(number) {

    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users/1'); //pulling user data 
    console.log(users);
};

getData(1);