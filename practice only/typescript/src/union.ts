let subs : number | string ="22";

let api:'pending'|''|'success'|'error' = 'pending';

let airlinre: 'Air India' | 'Indigo' | 'SpiceJet' = 'Air India';

const orders=["12","20","28","42"]

let currentorder: string | undefined;

for(let order of orders){
    if (order ==="28"){
        currentorder = order;
    }
}
console.log(currentorder)

function oderchai(size:"small"|"medium"|"large"|number){
    if(size ==="small"){
        return "small cutting chai";
    }
    if(size ==="medium" || size ==="large"){
        return "medium or large cutting chai";
    }return "number chai";
}

type chaiOrder={
    type:string
    sugar:number
}

function isChaiOrder(object:any):object is chaiOrder{
    return (
        typeof object === "object"&&
        object !== null &&
        typeof object.type === "string" &&
        typeof object.sugar === "number"
    )
}


function serveOrder(item:chaiOrder){
    if(item){
        return `serving ${item.type} with ${item.sugar} sugar`
    }
}

type masalachai={
    type:"masala";
    spicelevel:"number"
}
type gingerchai={
    type:"ginger";
    spicelevel:"number"
}
type elaichichai={
    type:"elaichi";
    spicelevel:"number"
}

type chai =masalachai | gingerchai | elaichichai;

function makechai(order:chai){
    switch(order.type){
        case "masala":
            return `making masala chai with spice level ${order.spicelevel}`;
        case "ginger":
            return `making ginger chai with spice level ${order.spicelevel}`;
        case "elaichi":
            return `making elaichi chai with spice level ${order.spicelevel}`;
    }
}

function brew(order:masalachai | gingerchai ){
    if("spicelevel" in order){
        
    }
}