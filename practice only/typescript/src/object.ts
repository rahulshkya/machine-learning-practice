

// {
//     name:string;
//     price:number;
//     isHot:boolean;
// }

let tea :{
    name :string;
    price:number;
    isHot:boolean;
}
tea={
    name : "green tea",
    price : 30,
    isHot : false
}

type Tea={
    name:string;
    price:number;
    ingredients:string[];
}

const adrakTea:Tea={
    name : "adrak tea",
    price : 40,
    ingredients : ["adrak","chai patti","pani"]
}

type brew ={
    brewtime :number
}

const coffe ={
    brewtime :5, 
    beans:"Arabica"
}
const chaiBrew:brew=coffe

type Item ={
name :string,
quantity :number
}
type Address ={
    street :string,
    city :string,
postalCode :string
}
type Order ={
    item :Item[];
    address :Address;
}
type chai ={
    name : string,
    price : number,
    isHot: boolean

}
const updateChai = function(updates:Partial<chai>){
    return console.log("updating chai with ",updates)
}
updateChai({price:35})

type Chai ={
    name:string;
    price:number;
    isHot:boolean;
    ingredients:string[];
}
type BasicChaiInfo =Pick<Chai,"name"|"price">

const chaiInfo :BasicChaiInfo={
    name : "masala chai",
    price :50
}
