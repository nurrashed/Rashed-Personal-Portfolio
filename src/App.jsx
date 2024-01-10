import NavBar from "./sections/navbar/Navbar";
import Header from "./sections/header/Header";
import About from "./sections/about/About";
import Experiences from "./sections/experiences/Experience";
import Portfolio from "./sections/portfolio/Portfolio";
import Testimonials from "./sections/testimonials/Testimonials";
/* import FAQs from "./sections/faqs/FAQs"; */
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import FloatingNav from "./sections/floating-nav/FloatingNav";
import Skill from "./sections/skill/Skill";
import { useRef, useState, useEffect } from "react";
const App = () => {

  const mainRef = useRef();
  const [showFloatingNav, setShowFloatingNav] = useState(true);
  const [siteYPostion, setSiteYPosition] = useState(0);  

  const showFloatingNavHandler = () => {
    setShowFloatingNav(true);
  };

  const hideFloatingNavHandler = () => {
    setShowFloatingNav(false);
  };

  // check if floating nav should be shown or hidden
  const floatingNavToggleHandler = () => {
    // check if we scrolled up or down at least 20px
    if (
      siteYPostion < mainRef?.current?.getBoundingClientRect().y - 20 ||
      siteYPostion > mainRef?.current?.getBoundingClientRect().y + 20
    ) {
      showFloatingNavHandler();
    } else {
      hideFloatingNavHandler();
    }

    setSiteYPosition(mainRef?.current?.getBoundingClientRect().y);
  };

  useEffect(() => {
    const checkYPosition = setInterval(floatingNavToggleHandler, 2000);

    // cleanup function
    return () => clearInterval(checkYPosition);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [siteYPostion]);

  return (
    <main ref={mainRef}>
      <NavBar />
      <Header />
      <About />
      <Skill />
      <Experiences />
      <Portfolio />
      <Testimonials />
      {/* <FAQs /> */}
      <Contact />
      <Footer />
      {showFloatingNav && <FloatingNav />}
    </main>
  );
};

export default App;
