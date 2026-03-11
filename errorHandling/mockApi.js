import axios from "axios";

//task3
export async function getPost() {
    try{
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts/1'
        )
        return response.data
    }catch(error){
        throw new Error('Failed to fetch post')
    }
    
}