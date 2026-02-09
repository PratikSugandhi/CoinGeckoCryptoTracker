import { useEffect, useState } from "react"

function CoinTable()
{
    const [count,setCount]=useState(0);
    const [flag,setFlag]=useState(false);

    async function download() {
        const response = await 
        fetch("https://jsonplaceholder.typicode.com/todos/2");
        console.log(response);
        const result =  await response.json();
        console.log(result);
    }

    useEffect(()=>{
        // this will run only on mounting phase
        download();
    },[])

    useEffect(()=>{
        // this will always run on mounting phase and when re-render
        console.log("Always Render")
    })

    useEffect(()=>{
        // this will run when on mounting and when re render.
        console.log("Flag only on Mounting Phase and on reRender")
    },[flag])

    useEffect(()=>{
        // this will run when on mounting and when re render.
        console.log("count only on Mounting Phase and reRender")
    },[count])

    useEffect(()=>{
        // this will run when on mounting and when re render.
        console.log("count or flag only on Mounting Phase and reRender")
    },[count,flag])

    return(
        <>
            {count}

            <button onClick={()=>{setCount(count+1)}}>Increment-Count</button>
            <br />

            {flag && <div>Flag is true</div>}

            <button onClick={() => setFlag(!flag)}>Toggle</button>
        </>
    )
}
export default CoinTable;