import axios from "axios";

async function getData(number) {

    const { data: user_id } = await axios('https://jsonplaceholder.typicode.com/users/user_id');
    const { data: post } = await axios('https://jsonplaceholder.typicode.com/posts')
    //console.log(user_id);
    console.log(post);
};


getData(1);