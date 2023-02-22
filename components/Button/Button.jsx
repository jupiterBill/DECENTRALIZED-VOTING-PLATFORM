import React from "react";
import Style from "./Button.module.css";
const GlobalButton = ({buttonName,handleClick})=> {
  return(
    <div className={Style.btnContainer}>
     <button className={Style.globalButton} onClick= {() =>handleClick()}>{buttonName}</button>
    </div>
  )
}
export default GlobalButton