import Raect from "react";
import Banner from "../components/Homepage/banner";
import About from "../components/Homepage/about";
import Welcome from "../components/Homepage/welcome";
import Accomodations from "../components/Homepage/acomodations";

function Home() {
  return (
    <section className="home-main">
      <Banner />
      {/* <About/> */}
      <Welcome />
      <Accomodations />
    </section>
  );
}

export default Home;
