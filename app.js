import axios from "axios";

const getData = (user_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users' + user_id);  //pulling user data

        resolve(console.log(data));
        reject(error);
    });
};

const getPost = (post_id) => {
    return new Promise(async (resolve, reject) => {
        const { data } = await axios('https://jsonplaceholder.typicode.com/posts' + post_id); //pulling post data

        resolve(console.log(data));
        reject(error);
    })
};

