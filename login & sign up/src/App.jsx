import { useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './pages/Login/Index';
import SignUp from './pages/Signup/Index';
import { Route, Routes } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoute from './routes/ProtectedRoute';
import AuthRoute from './routes/Authroute';
import TodoApp from './pages/Todoapp';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route element={<AuthRoute />}>
    <Route index element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
       
      </Route>
     
     
      <Route element={<ProtectedRoute />}>
      <Route path="/todoapp" element={<TodoApp />} />
      </Route>
    </Routes>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition:Bounce
/>
    </>
  );
};

export default App
