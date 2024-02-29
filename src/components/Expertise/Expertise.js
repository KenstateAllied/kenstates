import React from "react";
import styles from './Expertise.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const Expertise = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Insights to our ecosystems & domains.</p>
                <p data-aos='slide-left' className={styles.sub_text}>Your technology partner</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Expertise</p>
                        <p className={styles.logo_text}>We strive to excel</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Corporate Communication</p>
                        <p className={styles.logo_text}>Open door policy</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Safety</p>
                        <p className={styles.logo_text}>Highly Secure </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Expertise;