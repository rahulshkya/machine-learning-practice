let response:any = "28";

let numirical :number=(response as string).length

type Book ={
    name:string
}

let bookstring='{"name":"who moved my cheese"}'
let bookObject:Book=JSON.parse(bookstring) as Book;

try{

}catch(error){
if(error instanceof Error){
    console.log(error.message)
}
console.log("Error")
}

const data:unknown="chai aur code"
const strdata:string=data as string

type Role ='admin'|'user'

function redirectBasedonRole(role:Role):void{
    if(role ==="admin"){
        console.log("Redirect to admin dashboard")
        return
    }
    if(role==="user"){
        console.log("redirect to user dashboard");
        return;
    }
    role;
}

function neverReturn():never{
    while(true){
        
    }
}