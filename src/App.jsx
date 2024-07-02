

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

