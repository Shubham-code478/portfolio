import Raect from "react";
import Banner from "../components/Homepage/banner";
import About from '../components/Homepage/about';
import Welcome from '../components/Homepage/welcome';

function Home() {
  return (
    <section className="home-main">
      <Banner/>
      {/* <About/> */}
      <Welcome/>
    </section>
  );
}

export default Home;
