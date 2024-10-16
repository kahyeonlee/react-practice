import React, { useRef, useState } from "react";

const App = () => {
  const [plus,setPlus] = useState(0);

  const plusHandle=()=>{
    setPlus(plus+1);
  }

  return <div>
    <p>{plus}</p>
    <button onClick={plusHandle}>+1</button>
  </div>;
};

export default App;
