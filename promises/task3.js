// async getTodo
async function getTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    if (!response.ok){
        throw new Error("Failed to get todo data")
    }
    return response.json()
}

async function execute() {
    try {
        const todo = await getTodo()
        console.log(todo)
    } catch (error) {
        console.log(error)
    }
}

execute()

// async getuser

async function getUser(){
    const response2 = await fetch('https://jsonplaceholder.typicode.com/users/1')
    if (!response2.ok)
        throw new Error("Failed to get user data")
    return response2.json();
}

async function execute2(){
    try{
        const user = await getUser();
        console.log(user);
    }catch(error){
        console.log(error);
    }
}

execute2()

//promise.all and promise.race

async function promiseOperation(){
   try{
    const allData = await Promise.all([
        getTodo(),
        getUser()
    ])
    console.log("Promise all:", allData)

    const raceData = await Promise.race([
        getTodo(),
        getUser()
    ])
    console.log("Promise race: ", raceData)
}catch(error){
    console.log(error)
}
}

promiseOperation()
