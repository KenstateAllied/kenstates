import React from "react";
import Banner from '../../components/Banner';
import Expertise from '../../components/Expertise'
//import Expertise from "../../components/Expertise";
import ServicesHome from "../../components/ServicesHome";
import CaseStudy from "../../components/CaseStudy";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";
import Testimonial from "../../components/Testimonial";


const Home = () => {
  return (
    <>
      {/* Banner Section  */}
      <section>
        <Banner />
      </section>

      {/* About Us Section */}
      <section>
        <AboutUsHome />
      </section>

      {/* Our Expretise Section  */}
      <section>
        <Expertise />
      </section>
      
      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Case Study Section  */}
      <section>
        <CaseStudy />
      </section>

      {/* Real Section  */}
      <section>
        <Real />
      </section>

      {/* Testimonial Section  */}
      <section>
        <Testimonial />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;