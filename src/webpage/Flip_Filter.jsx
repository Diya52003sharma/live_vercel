import React, { useState } from "react";
import img1 from "../assets/images/img1.jpg"
import img2 from "../assets/images/img2.jpg"
import img3 from "../assets/images/img3.jpg"
import img4 from "../assets/images/img4.jpg"
import img5 from "../assets/images/imgg.png"
import img6 from "../assets/images/img6.jpg"
function Flip_Filter()
{
    const [category,setCategory]=useState("all")
    const items=[{id:1,name:"nike",category:"shoe",img:img1},
        {id:2,name:"ring",category:"jewel",img:img2},
        {id:3,name:"braclet",category:"jewel",img:img3},
        {id:4,name:"earing",category:"jewel",img:img4},
        {id:5,name:"shirt",category:"clothes",img:img5},
        {id:6,name:"cap",category:"clothes",img:img6},
    ]
    const filterItem= category==="all"?
    items:items.filter(item=>item.category===category)

    return(
        <>
            <div className="bg-amber-700  text-white flex flex-col justify-center items-center">FLIPKART</div>
            <div className="grid grid-cols-4 gap-4 bg-amber-300 text-white px-2 py-2">
            <button onClick={()=>setCategory("all")} className="bg-orange-400 text-2xl text-white rounded-full hover:bg-orange-500">ALL</button>
            <button onClick={()=>setCategory("shoe")} className="bg-orange-400 text-2xl text-white rounded-full hover:bg-orange-500">Shoe</button>
            <button onClick={()=>setCategory("jewel")} className="bg-orange-400 text-2xl text-white  rounded-full hover:bg-orange-500">Jewellery</button>
            <button onClick={()=>setCategory("clothes")} className="bg-orange-400 text-2xl text-white rounded-full hover:bg-orange-500">Clothes</button>
            </div>

<div className="grid grid-cols-3 gap-4 bg-amber-200 text-black">
  {
    filterItem.map(item => (
      <div key={item.id} className=" m-10 flex flex-col items-center bg-blue-200">  
        <img
          src={item.img}
          alt={item.name}
          className=" border-b-blue-600 shadow rounded-sm w-full h-40 object-cover"
        />
        <div className="mt-2 font-semibold">
        <h2 >{item.name}</h2> 
        </div>
      </div>
    ))
  }
</div>
        </>
    )
}
export default Flip_Filter;