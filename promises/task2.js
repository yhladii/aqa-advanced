//get todo
function getTodo (){return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data =>{
        console.log('GET Response: ',data)
        return data
    })
    .catch(error => {
        console.log('Failed to get todo data',error)
        throw error
    })
}
getTodo()

//get User

function getUser(){ return fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => response.json())
  .then(data => {
    console.log('GET Response:', data);
    return data 
  })
  .catch(error => {
    console.error('Failed to get user data:', error)
    throw error 
  });
}
getUser()

//Promise.all

const allPromises = Promise.all([
    getTodo(),
    getUser()
])
allPromises 
    .then(([todo,user]) => {
        console.log("Todo: ", todo)
        console.log("User: ", user);
    })
.catch((error) => {
    console.log("Promiss all failed");
})

//Promise.race

const racePromises = Promise.race([
    getTodo(),
     getUser()
    ])

racePromises
    .then((firstResult) => {
        console.log("First executed promise: ", firstResult)
   
    })
    .catch((error) => {
        console.log('Promise failed frst', error);
    })
