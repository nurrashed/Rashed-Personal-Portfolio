import { useEffect, useState } from "react";
import HeaderImage from "../../assets/header.png";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";
import AnimatedButton from "./AnimatedButton";
import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";
const Header = () => {
  const splitter = new GraphemeSplitter();
  const [textColor, setTextColor] = useState("var(--color-black)");
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div
        className="container header__container">
        <div className="header__profile" data-aos="flip-up">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <p
          className="name"
          style={{
            color: textColor,
          }}
          data-aos="fade-up"
        >
          <TypeAnimation
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              "Hi, I am Nur Mohammad Rashed",
              2000,
              () => setTextColor("var(--color-primary)"),
              "Hej, jag år Nur Mohammad Rashed",
              2000,
              () => setTextColor("var(--color-dark)"),
              "你好，我是努爾·穆罕默德·拉希德",
              2000,
              () => setTextColor("green"),
              "Hola, soy Nur Mohammad Rashed",
              2000,
              () => setTextColor("blue"),
              "Ciao, sono Nur Mohammad Rashed",
              2000,
              () => setTextColor("var(--color-black)"),
            ]}
            repeat={Infinity}
          />
        </p>
        <p data-aos="fade-up" style={{ textAlign: "justify" }}>
          Creative, passionate, and certified frontend developer with experience
          working in the fintech industry. Proficient in HTML, CSS, and JS, with
          strong foundation in front-end frameworks like React, Next.JS and
          moderate level familiarity in frontend frameworks like Angular and
          Vue.JS. <br /> <br /> I am committed to continuously improving my
          skills in HTML, CSS, JavaScript, and modern frontend frameworks. Ready
          to bring excellent coding expertise, great communication skills and
          innovative problem-solving ideas to your dynamic team.
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
