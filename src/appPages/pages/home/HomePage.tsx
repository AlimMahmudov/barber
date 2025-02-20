// import AOS from "aos";
// import "aos/dist/aos.css";

import About from "./sections/about/About";
import Discount from "./sections/discount/Discount";
import Hero from "./sections/hero/Hero";
import Map from "./sections/map/Map";
import Master from "./sections/master/Master";
import Review from "./sections/review/Review";
import Sertifikat from "./sections/sertifikat/Sertifikat";
import Services from "./sections/services/Services";

const HomePage = () => {
  // useEffect(() => {
  //   AOS.init({
  //     duration: 1000,
  //     once: true,
  //   });
  // }, []);

  return (
    <div>
      <Hero />
      <About />
      <Master />
      <Services />
      <Sertifikat />
      <Discount />
      <Review />
      <Map />
    </div>
  );
};

export default HomePage;
