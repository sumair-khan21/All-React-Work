function TaskOne(){
    let date = new Date(2023,10,22,8,20).getHours();
  let msg = "";
  if(date >1 && date< 12){
    msg = "good morning"

  }else if (date >=12 && date < 19){
    msg = "good afternoon"
  }
else{
  msg = "good night "
}
return(
    <>
    <h1>Hello sir {msg}</h1>
    </>
)
}

export default TaskOne