import React from "react";
import Image from "next/image";

import Styles from "./Footer.module.css";
import images from "../../public/assets/index"
const Footer = ()=>{
    return (
        <div className={Styles.Footer}>
          <div className={Styles.Footer_Container}>
            <div>
              
            </div>
            <div className={Styles.FooterLogo}>
                <Image src={images.decect} width= {200} height={200} className = {Styles.FooterLogo_image}/>
            </div>
              <div className={Styles.footer_text}>
              DECECT THE NUMBER ONE DECENTRALIZED VOTING PLATFORM
              ALL RIGHTS RESERVED @2023
              </div>
              
          </div>
        </div>
    )
}

export default Footer;


