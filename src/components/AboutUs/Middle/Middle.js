import React from "react";
import styles from './Middle.module.css';
import logo1 from '../../../assets/aboutUs/middle1.png';
import logo2 from '../../../assets/aboutUs/middle2.png';
import logo3 from '../../../assets/aboutUs/middle3.png';

const Middle = () =>{
    return(
        <div style={{backgroundColor: '#f8f8f8'}} className='overflow-hidden'>
            <div className={`container ${styles.contain}`}>
                <p data-aos='fade-down-right' data-aos-offset="170" className={styles.mainHead}>Our Deliverables</p>
                <p data-aos='fade-up-left' data-aos-offset="170" className={styles.mainContent}>Products</p>

                <div className="row">
                    <div data-aos='fade-right' data-aos-offset="170" className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo1} alt=""/>
                            <p className={styles.head}>Website Design & Development</p>
                            <p className={styles.content}>.</p>
                        </div>
                    </div>

                    <div data-aos='fade-up' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo2} alt=""/>
                            <p className={styles.head}>Mobile Applications Design & Development</p>
                            <p className={styles.content}>We use the latest applications & frameworks</p>
                        </div>
                    </div>

                    <div data-aos='fade-left' className="col-md-4">
                        <div className={styles.box}>
                            <img src={logo3} alt=""/>
                            <p className={styles.head}>Applications Integrations & Testing</p>
                            <p className={styles.content}>We extensively test our applications before deployment</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Middle;