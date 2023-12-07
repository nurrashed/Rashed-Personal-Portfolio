import { useEffect } from "react";
import HeaderImage from "../../assets/header.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import AnimatedButton from "./AnimatedButton";
const Header = () => {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3 data-aos="fade-up">Nur Mohammad Rashed</h3>
        <p data-aos="fade-up">
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today!
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="header__socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>

          <div
            className="scroll__down"
            style={{
              animation: "down 1.5s infinite",
              position: "absolute",
              right: "-55px",
              bottom: "40px",
            }}
          >
            <AnimatedButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
