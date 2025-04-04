function TaskTwo(){
    let CurrentDate  = new Date().toLocaleDateString();
    let Time = new Date().toLocaleTimeString();
    
    var name = "SUMAIR";
return(
    <>
    <h1>Hello My name is {name}</h1>
        <p>Currrent date: {CurrentDate}</p>
        <p>Time: {Time}</p>
    </>
)
}

export default TaskTwo