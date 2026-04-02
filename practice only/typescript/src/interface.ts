type chaiOrder={
    type:string;
    sugar:number;
    strong:boolean
}

function makeChai(order:chaiOrder){
console.log(order)
} 

function serveChai(order:chaiOrder){
console.log(order)
}

type TeaRecipe={
    water:number;
    milk:Number
}

// class MasalaChai implements TeaRecipe{
//     water =100;
//     milk =50;
// }


interface cupSize {
  size: 'small'|'medium'
}

class chai implements cupSize{
    size :"small" | "medium" = "small"
}

interface Response {
    ok: boolean
}
class myRes implements Response{
    ok :boolean =true
}

type BaseChai = {teaLeaves:number}
type Extra ={masala:number}

type MasalaChai=BaseChai & Extra

const cup : MasalaChai={
    teaLeaves:2,
    masala:1
}

type User ={
    username:string;
    bio?:string
}

const user1 :User={
    username:"rahul shakya"
}

console.log(user1.bio)
const u2 : User={
    username:"prasant",
    bio:"i am a software developer"
}

type Config={
    readonly appname:string
    version:number

}
const apps:Config={
    appname:"chai app",
    version:1
}

// literal types
type TeaType = "masala" | "ginger" | "green"

