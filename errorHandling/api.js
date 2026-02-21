import axios from "axios";

//task1 
export async function getInvalidRequest() {
    try{
        const response = await axios.get(
        'https://jsonplaceholder.typicode.com/invalid-endpoint'
        )
        return response.data
    }catch(error){
        return `Request failed with response status code ${error.response.status}`
    }   
}

//task2 
export async function getPostWithHeadersAndParams() {
    const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        
        {
        headers: {
            Authorization: 'Bearer token',
            CustomHeader: 'Test'
        },
        params:{
            userId:1
        }
    })
    return response.config
}