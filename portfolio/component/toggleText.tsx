'use client'

import { useState } from 'react';



  const ToggleText = () =>{
    
    const [expanded, setExpanded] = useState(false);
    return(
        <div>
            <button className={`text-[#485E4C] font-bold text-xl flex ml-[20px] mt-[20px] ${expanded ? "text-green-700" : "text-[#485E4C]"}`}
onClick ={()=> setExpanded(!expanded)}>{expanded ? "Learn less" : "Learn more" }</button>
        </div>
    )
  }
  export default ToggleText;