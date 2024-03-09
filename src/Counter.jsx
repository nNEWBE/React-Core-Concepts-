import { useState } from "react";

export default function Counter()
{
    const [count,setCount]=useState(0);

    const handleAdd=()=>{
        const newCount=count+1;
        setCount(newCount);
    }

    const handleReduce=()=>{
        const newCount=count-1;
        setCount(newCount);
    }
    
    return (
        <div style={{margin:'20px',padding:'30px',border:'5px solid yellow', borderRadius:"20px"}}>
            <h3>Here are two counter buttons below</h3>
            <h4>Counter : {count}</h4>
            <button onClick={handleAdd} style={{marginRight:'20px'}}>Add</button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    )
}