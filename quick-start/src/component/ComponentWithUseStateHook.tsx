import React, { Children, FunctionComponent, useState } from "react";

const Counter:FunctionComponent<{ initial?: number ,children?:React.ReactNode}> = 
               ({ initial = 0 ,children}) => {
  const [clicks, setClicks] = useState(initial);
     return (
    <div>
    {children}
    <p>Clicks: {clicks}</p>
    <button onClick={() => setClicks(clicks+1)}>+</button>
    <button onClick={() => setClicks(clicks-1)}>-</button>
    </div>
  )
}
export default Counter;
