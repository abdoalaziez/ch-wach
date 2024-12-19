// import Student from "../components/Student"


// const App = () => {
//   return (
//     <div>
//        <Student name="umran" age={20} isStudent={false}/>
//        <Student name="abdo" age={30} isStudent={true}/>
//        <Student name="aziz" age={40} isStudent={false}/>
//        <Student name="almailck" age={50} isStudent={true}/>
//        <Student name="you"/>
//     </div>
//   )
// }
// export default App;




// import UserGreeting from "../components/UserGreeting"
// const Apps = () => {
//   return (
//     <div>
//       < UserGreeting isLoggedIn={true} username="umran"/>
//       <UserGreeting />
//     </div>
//   )
// }

// export default Apps


// import Button from "../components/Button"
// const App = () => {
//   return (
//     <div>
//       <Button />
//     </div>
//   )
// }
// export default App;




// import React, { useState , useEffect } from "react"


// const App = () => {
//   const [width , setWidth] = useState(window.innerWidth)
//   const [height , seHeight] = useState(window.innerHeight)

// useEffect(()=>{
//     window.addEventListener("resize", heandleResze)
//   console.log("EVENT LISTENER ADDED" )


//   return() =>{
//     window.removeEventListener("resize" , heandleResze)
//     console.log("EVENT LISTENER REMOVE" )
//   }
// }, []);

// useEffect(()=>{
//   document.title =`size: ${width} x ${height}`;
// }, [width , height]);

//   function heandleResze(){
//     setWidth (window.innerWidth)
//     seHeight (window.innerHeight);
//   }
//   return (
//     <div>
//       <p>window width: {width}px</p>
//       <p>window height: {height}px</p>
//     </div>
//   )
// }

// export default App





 import Clook from "../components/Clook";
import  React,{ useEffect, useState } from "react";

const App = () => {
  return (
    <div>
      <Clook />
  
    </div>
  )
}
export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Pages/Home";
// import Login from "./Pages/Login";
// import NotFound from "./Pages/NotFound";

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/*" element={<NotFound />} />
//       </Routes> 
//     </Router>
//   );
// };
// export default App;



// import React from 'react'

// const App = () => {
//   return (
//     <div className='flex justify-center items-center min-h-screen bg-gray-100'>
//       <div className=''>
//             <label htmlFor='email'>Email
//             </label>
//             <br />
//             <input type="Email" id='Email' placeholder='Enter you name'
//             className='flex justify-center items-center min-h-screen bg-gray-100'/>
//           </div>
//           <div>
//             <label htmlFor='password'>password
//             </label>
//             <br />
//             <input type="password" id='password' placeholder='Enter you name'
//             className=''/>
//             <br />
//             <button type='Submt' className='           
//             className="w-full py-3 bg-blue-500 text-white font-semibold 
//         rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 
//         focus:ring-blue-500 border-r-blue-500"'>
//           Submt
//            </button>
//           </div>
//       </div>
//   )
// }

// export default App
