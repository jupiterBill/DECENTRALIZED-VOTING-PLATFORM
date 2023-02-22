import React from "react";
import Image from "next/image";

import images from "../../public/assets/index"
import GlobalButton from "../Button/Button";
import Styles from "./Main.module.css";

const Main = ()=>{
    return(
        <div className={Styles.Main}>
            Main Section
        </div>
    )
}
export default Main