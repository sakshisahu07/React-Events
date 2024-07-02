// // import { BrowserRouter, Routes,Route } from "react-router-dom";
// // import Layout from "./Layout";
// // import Home from "./Pages/Home";
// // import About from "./Pages/About";
// // import Service from "./Pages/Service";
// // import Contact from "./Pages/Contact";
// // import Nopage from "./Pages/Nopage";


// // const App=()=>{
// //   return(
// //     <>
// //     <BrowserRouter>
// //       <Routes>
// //         <Route path="/" element={<Layout/>}>
// //           <Route index element={<Home/>}/>
// //         <Route path="/home" element={<Home/>}/>
// //         <Route path="/about" element={<About/>}/>
// //         <Route path="/service" element={<Service/>}/>
// //         <Route path="/contact" element={<Contact/>}/>
// //         <Route path="/nopage" element={<Nopage/>}/>

// //         </Route>

// //       </Routes>

// //     </BrowserRouter>
// //     </>
// //   )
// // }
// // export default App;

// import {BrowserRouter,Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./Pages/Home";
// import About from "./Pages/About";
// import Service from "./Pages/Service";
// import Contact from "./Pages/Contact";
// import Nopage from "./Pages/Nopage";
// import Companyservice from "./Pages/Companyservice.jsx";
// import Productservice from "./Pages/Productservice.jsx";
// import Sellsservice from "./Pages/Sellsservice.jsx";

// const App=()=>{
//   return(
//     <>
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Layout/>}>
//       <Route index element={<Home/>}/>
//       <Route path="/home"element={<Home/>}/>
//       <Route path="/about"element={<About/>}/>
//       <Route path="/service"element={<Service/>}>
//         <Route path="companyservice"element={<Companyservice/>}/>
//         <Route path="productservice"element={<Productservice/>}/>
//         <Route path="sellsservice"element={<Sellsservice/>}/>
//       </Route>
//       <Route path="/contact"element={<Contact/>}/>
//       <Route path="*"element={<Nopage/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//     </>
//   )
// }
// export default App;





const App=()=>{
  const myName=(fnm, snm)=>
    {
      alert ("My name : "+ fnm +" "+ snm + "from bhopal")
    }
    return(
        <>
        <h1>welcome</h1>
        <button onClick={()=>{myName("Sakshi","Sahu")}}>Click here</button>
        </>
    )
}
export default App;

const App=()=>{

  const myAdd=(a,b)=>{
    alert(a+b);
  }
  return(
    <>
    <h1>Welcome to React events</h1>
    <button onClick={()=>{myAdd(4,6)}}>Click here</button>
    </>
  )
}
export default App;



const App=()=>{
  const display=(nm, b)=>{
    alert (nm+ "Event Type: "+ b.type);
  }
  return(
    <>
    <h1>Welcom</h1>
    <button onClick={(e)=>{display("Sakshi", e)}}>Click here</button>
    </>
  )
}
export default App;



const App=()=>{
  const display=(e)=>{
    alert("Event Type:" + e.type);
  }
  return(
    <>
    <h1>Welcome</h1>
    <button onClick={display}>Click here</button>
    </>
  )
}
export default App;


const App=()=>{
  const myval=(e)=>{
    let nm= e.target.name;
    let val=e.target.value;
    let typ=e.target.type;
    alert("name : "+ nm + "value : "+ val + "type : "+ typ +"Event: " + e.type);

  }
  return(
    <>
    <h1>Welcome</h1>
    <button type="button" name="btn1" value="myBtn" onClick={myval}>Click here</button>
    </>
  )
}
export default App;


const App=()=>{

  const myName=(nm)=>{
      alert("My name : "+ nm + "from Bhopal");
  }
  return(
      <>
      <h1>Welcome to React events</h1>
      <button onClick={()=>{myName("Sakshi sahu")}}>Click here</button>
      </>
  )
}
export default App;


const App=()=>{
  const display=()=>{
      alert("this is a alert box")
  }
  return(
      <>
      <h1>Welcome to React Events</h1>
      <button onClick={display}> Click here </button>
      </>
  )
}
export default App;

