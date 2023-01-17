import axios from "axios";
//console.log("success");
async function getData(number) {

    const { data: user } = await axios('https://jsonplaceholder.typicode.com/users/1'); //pulling user data 
    console.log(user);

    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts/1'); //pulling post data
    console.log("Posts", post);
};

getData(1);