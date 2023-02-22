import React from "react";
import Styles from "./Navbar.module.css"
import Image from "next/image";
import { useRouter } from "next/router";
//INTERNAL IMPORT 

import GlobalButton from "../Button/Button";
import images from "../../public/assets/index"

const Navbar = ()=>{
    const router = useRouter()

    const candidatePush = ()=>{
        alert("button Clicked")
        
    }
    return (
        <div className={Styles.Navbar}>

            <div className={Styles.Navbar_container}>
                <div className =  {Styles.Navbar_left_side_container}>
                    <div className={Styles.logo}>
                        <Image src={images.decectrem} width={100} height={100}/>
                    </div>
        <div className={Styles.left_sideBtn_container}>
            <div className={Styles.left_sideBtn}>
                <GlobalButton buttonName={"CANDIDATES"} handleClick = {()=>{router.push("./candidates")}} />
            </div>
        </div>
                </div>
        <div className={Styles.Navbar_right_side_container}>
             <div className={Styles.voters}>
                <GlobalButton buttonName={"VOTERS"} handleClick = {()=>{}} />
             </div>
             <div className={Styles.voters}>
                <GlobalButton buttonName={"CONNECT"} handleClick = {()=>{}} />
             </div>
        </div>
            </div>
        </div>
    )
}
export default Navbar;