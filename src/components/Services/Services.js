import React from "react";
import styles from './Services.module.css';
import ServiceHome from "../ServiceHome/ServiceHome";
import data from './data';

const Services = () => {
    return(
        <div className={`container ${styles.contain}`}>
                <p className={styles.heading}>Services</p>
            <div>
                <p className={`mx-auto ${styles.subHeading}`}>Modernize your workflow and maximize result</p>
            </div>

            <div className="row">
                {
                    data && data.map(x=>(
                        <div key={x.id} className="col-md-4">
                            <ServiceHome id={x.id} heading={x.heading} content={x.content} to={x.to} icon={x.icon}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Services;