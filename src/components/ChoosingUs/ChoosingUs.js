import React from "react";
import styles from './ChoosingUs.module.css';
import experience from '../../assets/home/experience.png';
import communication from '../../assets/home/communication.png';
import comfort from '../../assets/home/comfort.png';

const ChoosingUs = () =>{
    return(
        <div style={{backgroundColor: '#fff1e5'}}>
            <div className="container overflow-hidden">
                <p data-aos='slide-right' data-aos-offset="220" className={styles.heading}>Why you should choose us for your software projects.</p>
                <p data-aos='slide-left' className={styles.sub_text}>Cutting Edge Plafforms & Frameworks</p>
                <div className={`row ${styles.sub}`}>
                    <div data-aos='fade-right' className="col-md-4">
                        <img src={experience} alt="experience"/>
                        <p className={styles.logo_head}>Expertise</p>
                        <p className={styles.logo_text}>Quick Deliverables</p>
                    </div>

                    <div data-aos='fade' className="col-md-4">
                        <img src={communication} alt="experience"/>
                        <p className={styles.logo_head}>Affordable Quality Development</p>
                        <p className={styles.logo_text}>We will offer you great packages</p>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <img src={comfort} alt="experience"/>
                        <p className={styles.logo_head}>Long Term Maintenance Plans</p>
                        <p className={styles.logo_text}>Keep your platforms upto date</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChoosingUs;