import React, { useState }  from "react";

function Filt()
{
    const filter=
    [
        {id:1,name:"jeans",category:"clothes"},
        {id:2,name:"shorts",category:"clothes"},
        {id:3,name:"tees",category:"clothes"},
        {id:4,name:"shirt",category:"clothes"},
        {id:5,name:"bangles",category:"jewellary"},
        {id:6,name:"rings",category:"jewellary"},
        {id:7,name:"anklets",category:"jewellary"},
    ]
    const[state,upState]=useState("all");
    const categories=["all",...new Set(filter.map(el=>el.category))]
    const filterData= categories==="all"?filter:filter.filter((el)=>el.category)
    
    return(
        <>
        
        </>
    )
}
export default Filt;