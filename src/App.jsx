import { useState } from "react";

function App() 
{
  let [value,setValue]=useState("#FFFFFF")
  function HandleOnChange(event)
  {
     setValue(event.target.value);
  }

 return (<center>
  <h1>Color Picker</h1>
  <h3 style={{backgroundColor: value}}>Color: {value}</h3>
  <input type="color" value={value} onChange={HandleOnChange} />
 </center>);
}

export default App;
