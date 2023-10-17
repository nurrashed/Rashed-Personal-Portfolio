import HeaderImage from "../../assets/header.png";
import data from "./data";
import "./header.css";
import AnimatedButton from "./AnimatedButton";
const header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3>Nur Mohammad Rashed</h3>
        <p>
          You are a click away from building your dream website or web app. Send
          me the details of your project for a modern, mobile responsive, highly
          performant website today! You are a click away from building your
          dream website or web app. Send me the details of your project for a
          modern, mobile responsive, highly performant website today!
        </p>
        <div className="header__cta">
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

export default header;
