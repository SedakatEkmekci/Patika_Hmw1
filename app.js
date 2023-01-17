import axios from "axios";

async function getData(number) {

    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/1'); //pulling user data 
    console.log(user);
    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/1'); //pulling post data
    console.log(post);
};


export default getData;