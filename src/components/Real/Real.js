import React from "react";
import styles from './Real.module.css';
import improveImg from '../../assets/home/improves.png';

const Real = () =>{
    return(
        <div className="mb-5 overflow-hidden">
            <div className="row g-0">
                <div className={`col-md-6 ${styles.imgDiv}`}>
                    <img data-aos='slide-right' data-aos-offset="150" src={improveImg} alt="" className={styles.img}/>
                </div>
                <div className="col-md-6">
                    <div className={styles.text}>
                        <p data-aos='slide-right' data-aos-offset="150"  className={styles.heading}>Real</p>
                        <p data-aos='slide-left' data-aos-offset="150" className={styles.subHeading}>Software Dev Feedback channels</p>
                        <p data-aos='zoom-in' data-aos-offset="150" className={styles.content}>Look & Feel </p>
                        <div data-aos='zoom-in' style={{textAlign:'left'}}>
                            <button className={`btn custom_btn ${styles.btn}`}>Reach us out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Real;