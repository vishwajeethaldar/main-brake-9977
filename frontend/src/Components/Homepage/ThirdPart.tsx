import React, { useState } from "react";
import "./ThirdPart.css"

const ThirdPart = () => {

    const [show, setshow] = useState(false);


  return (
    <div>
<div>
<img style={{
    width: "1150.55",
    height: "596.73",
    marginLeft:"130px"
  
}} src="https://clockify.me/assets/images/time-tracker-screenshot.svg" alt="" />
</div>

{/* <button className="darkbtn"   style={{textAlign:"center",padding:"4px"}}
        onClick={() => setshow(!show)}>
          {!show ? "Dark" : "Light"}

</button> */}





    </div>
  )
}

export default ThirdPart