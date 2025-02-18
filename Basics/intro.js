let h1=React.createElement("h1",{},"Hello React")
let root =ReactDOM.createRoot(document.querySelector(".root"));
console.log(h1)
root.render(h1);

let div=React.createElement("div",{},[
    React.createElement("h1",{},"How Are you"),
    React.createElement("h2",{},"Whats Up"),
])


//kul mila ke yrr hume html hi likhna h toh kyy na html direct likhe js me 
//isliye aata h jsx




//wrting html/xml like structure within js file  called as jsx 
//its then transpiled to react element structure using babel 

let h2=<h2>Hello REACT Using jsx</h2>




//looking into jsx
let age=21;
let cnt=<h2>{`what is ur name ${age}`}</h2> //html region 
//{} ye h script region 
//{ script ka code hum iske andar likhenge }
root.render(cnt)

