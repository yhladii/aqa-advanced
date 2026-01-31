const users =[
    {name:"Yuliia", email:"ju.digl@gmai.com", age:23},
    {name:"Anna", email:"ann.volianske@gmail.com", age:24},
    {name:"Mikle", email:"mikle0253@gmail.com", age:30}
]
for(const{name,email,age} of users){
    console.log(`The user ${name} is ${age} years old and has email ${email}  `);
}