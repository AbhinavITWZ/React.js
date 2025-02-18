//components are js function that return jsx (react element ) 
//components are therefore reusable code as they are normally a functions 
//since they return jsx so,either we can call the fn by fn_name() or using <fn_name/> or <fn_name></fn_name>

let Fn=()=>{
    return (
        <h1>Hello World Compnent ban rhe h</h1>
    )
}
let root=ReactDOM.createRoot(document.querySelector(".root"))
root.render([<Fn></Fn>,Fn(),<Fn/>])