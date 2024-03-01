import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Reasons for vouching for us.</p>
                <p data-aos='slide-left' className={styles.sub_text}>Test</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Experience</p>
                        <p className={styles.logo_text}>TEst</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Easy Communication</p>
                        <p className={styles.logo_text}>Test</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Comfortable</p>
                        <p className={styles.logo_text}>Test</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;