let h2=React.createElement("h2",{},`Hello World !!`);
// let root=document.querySelector("#root");
// root.append(h2.props.children)
let root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);
let container=React.createElement("ul",{},[
    React.createElement("li",{
        key:1, 
        style:{
        listStyle: "none"
        }
},`INDIA`),
    React.createElement("li",
        {
            key:2,
           
        },
        `My COUNTRY`)
])

root.render(container)
