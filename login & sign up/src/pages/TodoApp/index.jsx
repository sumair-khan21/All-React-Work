import { useEffect, useState } from 'react'
import { collection, addDoc, setDoc, doc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"; 
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';


const TodoApp = () => {
  const [refresh , setrefresh] = useState(false); 
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [userData ,setUserData] = useState([]);
  const navigate = useNavigate();

const AddData =async ()=>{
 try {
  const userobj = {
    name: 'sums',
 }

// auto generated id
  //  const refes = await addDoc(collection(db, "users"), userobj);
  //  console.log(refes,"refes")

  // khd ki banie hoi id
  const ref = await setDoc(doc(db,"Users","abcd"), userobj);
  console.log(ref,"ref")
 } catch (error) {
  console.log (error, "error")
 }

}



useEffect(()=>{
  getData()
},[refresh]);

const getData = async ()=>{
  try { 
    const array = [];
    const docSnap = await getDocs(collection(db, "users"));
  
    docSnap.forEach((doc)=>{
      // console.log("doc", doc.data());
      // console.log("id", doc.id  )
      array.push({
        ...doc.data(),
        id: doc.id , 
      });

     
    });
    // console.log("arr", arr)
    setUserData([...array]);
  } catch (error) {
    console.log (error, "error")
  }
};

console.log("userData" , userData) ;

const handleSubmit = async (ele)=>{
try {
  ele.preventDefault();
  console.log("handleSubmit")

  const userObject = {
    firstName, 
   
  };

  console.log("handlSubmit" , userObject)
  const docRef = await addDoc(collection(db,"users"), userObject) 
console.log("docRef", docRef  )  
setrefresh(!refresh);

} catch (error) {
  console.log (error, "error")
}
}


const Editdata = async(id)=>{
  console.log("Editdata", id)
  const editVal  = prompt("enter dirst name")
  const userObj = {
    firstName: editVal,
  };
  await updateDoc(doc(db, "users", id) , userObj);
  setrefresh(!refresh);
 
};


const deletedata = async(id)=>{
  console.log("Editdata");
  const delData = alert("are you sure you want to delete");
  const userObj = {
    firstName: delData,
  };
  await deleteDoc(doc(db, "users", id), userObj);
  setrefresh(!refresh);
}
// console.log("firstname", firstName)
  return (   
    <>
    <div className="summs">
     {/* <button onClick={AddData}>click</button> */}
     <h1 >Todo Application </h1>


     


      <form onSubmit={handleSubmit} >
      <div className="container">
      <section>
    <div className="input-group" >
        <input style={{margin:"30px"}}  className="input" placeholder='SEARCH ANYTHING' autocomplete="off" name="text" type="text" required="" onChange={(e)=>setfirstName(e.target.value)} ></input>
        <label className="user-label"></label>
    </div>
</section>
  <label className="label"></label>
</div>
        {/* <input type="text"  placeholder='last Name' onChange={(e)=>setlastName(e.target.value)}/>
        <input type="text"  placeholder=' Email' onChange={(e)=>setemail(e.target.value)}/> */}
        <button style={{margin:"10px"}}>SUBMIT</button>
      </form>

<div>
  {
    userData.map((user, index)=>{
      return(
        <ul>
        <li key={index}>{user.firstName} <button onClick={()=>Editdata(user.id)}> EDITED
</button><button onClick={()=>deletedata(user.id)}>DELETE</button></li>
        </ul>
      )
    })
  }
  </div>     

  </div>
  <button className="summs"
        onClick={() => {
          localStorage.clear();
          navigate("/");
        }}
      >
        LOGOUT
      </button>
    </>
  )
}

export default TodoApp;
