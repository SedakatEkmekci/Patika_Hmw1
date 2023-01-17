import axios from "axios";

async function getData() {

    const { data: users } = await axios('https://jsonplaceholder.typicode.com/users');

    console.log(users);
};

getData();