import React from "react";
import styles from './Banner.module.css';

const Banner = () => {

  return (
    <>
        <div className={styles.imgbox}>
            <div className={`${styles.center} overflow-hidden`}>
                <p data-aos='fade-down' className={styles.text}>Software Development, Implementation & Deployment</p>
                <button data-aos='fade-up' className={`btn custom_btn ${styles.btn}`}>Contact us with all your digital needs</button>
            </div>
            
        </div>
        
    </>
  );
};

export default Banner;
