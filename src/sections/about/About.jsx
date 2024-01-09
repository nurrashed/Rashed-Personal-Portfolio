import AboutImage from "../../assets/about1.jpg";
import CV from "../../assets/CV_Nur Mohammad Rashed.pdf";
import CoverLetter from "../../assets/Cover Letter_Nur Mohammad Rashed.pdf";
import { HiDownload } from "react-icons/hi";
/* import Card from "../../components/Card";
import data from "./data"; */
import "./about.css";

const About = () => {
  return (
    <section id="about" data-aos="fade-up">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>
        <div className="about__right">
          <h2 style={{paddingBottom:"2rem"}}>About Me</h2>
          {/* <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div> */}
          <p style={{ textAlign: "justify" }}>
            With over two and half years of professional experience as a
            front-end developer, I have led and managed various front-end
            projects from scratch. Throughout my career, I have had the
            opportunity to work with various projects in the Fintech Industry
            and gained extensive experience in crafting responsive and
            user-friendly web interfaces. I am good at HTML, CSS, JavaScript,
            TypeScript, and I'm also proficient in frontend frameworks,
            including React, Next.js, Angular and Vue.JS.
          </p>
          <p style={{ textAlign: "justify" }}>
            As a front-end developer for Nordfin Capital Group, I created an
            invoice management platform that enables users to choose different
            payment options and access other features. The platform serves
            thousands of customers and provides satisfactory invoicing service
            for Nordfin Capital Group. I also produced, maintained, and modified
            the company's internal websites and user interfaces, and worked with
            automated testing and bug fixing. Moreover I have experience working
            in agile development environment and collaborating with
            cross-functional teams.
          </p>
          <p style={{ textAlign: "justify" }}>
            A few of my key strengths are finding unique and simple solutions to
            problems that arise while ensuring a good customer experience, the
            ability to work independently from any stage of a project’s life
            cycle and performing well in a fast-paced environment. I consider
            myself a team player who can independently find different ways to
            move forward as well.
          </p>
          <p style={{ textAlign: "justify" }}>
            Outside work, I love to explore new places and I consider myself a
            film enthusiast. These hobbies boost my wellbeing, reduce stress and
            burnout.
          </p>
          <p style={{ textAlign: "justify" }}>
            If you would like to discuss any front-end job opportunity, any kind
            of collaboration or even your favourite destination or film, feel
            free to email me @ rashed_huawei@yahoo.com{" "}
          </p>
          <p style={{ textAlign: "justify" }}>
            If you would like to discuss any front-end job opportunity, any kind
            of collaboration or even your favourite destination or film, feel
            free to email me @ rashed_huawei@yahoo.com
          </p>
          <p style={{ textAlign: "justify" }}>
            Skills: JavaScript, React, TypeScript, RestAPI, Unit Testing, UX/UI,
            HTML, CSS, Tailwind CSS, Bootstrap, SCSS, Material UI, Vite.JS,
            Next.JS, Angular, Vue, C#, .Net, Node, MongoDB, Docker, Kubernetes,
            Git, Azure DevOps, CI/CD
          </p>
          <div className="downloadCV">
            <a href={CV} download className="btn primary cvButton">
              Download CV <HiDownload />
            </a>
            <a
              href={CoverLetter}
              download
              className="btn primary coverLetterButton"
            >
              Download Cover Letter <HiDownload />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
