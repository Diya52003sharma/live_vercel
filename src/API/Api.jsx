import React, {  useEffect, useState } from "react";
function Api()
{
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>
        {
            console.log(res);
            return res.json();
        })
        .then((data)=>
        {
            console.log("data is loading",data);
            setData(data)   
        })
    },[])
    // [dependencies]
    return(
        <>
        <h1 className="bg-pink-600 text-5xl p-4 flex justify-center text-white">Cutomer's DATA</h1>
        <div className="  grid grid-cols-3 p-4 m-4 gap-6" >
           {data.map((data,index)=>
        
          <div
    key={data.id}
    className={`border-2 border-black hover:scale-105 duration-300 p-4 rounded-xl text-black text-2xl
      ${index % 2 === 0 ? "bg-indigo-600 text-white" : "bg-yellow-400"}
    `}
  >
        <span className="bg-pink-500 flex justify-center border-2 border-black font-bold mb-4">{data.name}</span>
        <p>Username: {data.username}</p>
        <p>Email: {data.email}</p>
        <p>Address: {data.address.city}</p>
        </div>
    )}
        </div>
        </>
    )
}
export default Api;