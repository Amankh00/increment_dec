import { useState } from "react";

const ClickFunction = ()=>
{
    const state = useState();
    const[count,setCount]= useState(0);

const inc = ()=>
{
    setCount(count+1);

    console.log("clicked"+ " ");
}

const Dec = ()=>
{
    if(count>0)
    setCount(count-1);
}
    return(
        <>
        <div className="red">
            <h1>{count}</h1>
            <div className="red2">
            <button onClick={Dec}>Decrement</button>
           
            <button onClick={inc}>Increment</button>
            </div>
        </div>
        </>
    );

} ;

export default ClickFunction;
