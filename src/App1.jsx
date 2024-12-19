// import  { useState } from "react";

// const Input = ()=> {
//   const [name, setName] = useState("");
//   const [displayName, setDisplayName] = useState("");
//   const handleShowName = () => { 
//   if (name.trim() === "") {
//     setDisplayName("You need to provide a name");
//   } else {
//     setDisplayName(name);
//   }
// };
// return (
// <div className="flex justify-center items-center h-screen">
//   <div className="flex flex-col space-y-4 items-center">
//     <p className="text-lg font-semibold text-gray-700">{displayName || 
//     "You need to provide a name"}</p>
//     <input
//       className="border-2 border-gray-400 p-2 rounded w-64"
//       type="text"
//       placeholder="Your Name"
//       value={name}
//       onChange={(e) => setName(e.target.value)}
//     />
//     <button
//       className="bg-red-600 text-white px-4 py-2 rounded hover:bg-blue-600 w-64"
//       onClick={handleShowName}
//     >
//       Show Name
//     </button>
//     </div>
//   </div>
//   );
// }

// export default Input;