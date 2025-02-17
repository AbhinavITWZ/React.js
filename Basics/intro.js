let h1=React.createElement("h1",{},"Hello React")
let root =ReactDOM.createRoot(document.querySelector(".root"));
console.log(h1)
root.render(h1);

let div=React.createElement("div",{},[
    React.createElement("h1",{},"How Are you"),
    React.createElement("h2",{},"Whats Up"),
])
root.render([h1,div])


//kul mila ke yrr hume html hi likhna h toh kyy na html direct likhe js me 
//isliye aata h jsx



{/* <div>
    h1
    h2
</div> */}


