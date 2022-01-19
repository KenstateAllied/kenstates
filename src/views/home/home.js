import React from "react";
import Banner from '../../components/Banner';
import ChoosingUs from "../../components/ChoosingUs";
import ServicesHome from "../../components/ServicesHome";
import Real from "../../components/Real";
import Footer from "../../components/Footer";
import AboutUsHome from "../../components/AboutUsHome";


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

      {/* Why Choosing Us Section  */}
      <section>
        <ChoosingUs />
      </section>
      
      {/* Services Section  */}
      <section>
        <ServicesHome />
      </section>

      {/* Real Section  */}
      <section>
        <Real />
      </section>

      {/* Footer Section  */}
      <section>
        <Footer />
      </section>
    </>
  );
};

export default Home;