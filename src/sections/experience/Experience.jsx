import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import data from "./data";
import "./experience.css";

const Experience = () => {
  console.log("frontend: ", data.frontendExperience[0].experienceName);

  return (
    <section id="experience">
      <h2>My Experiences</h2>
      <p>What Skills I Have</p>
      <div className="container experience__container">
        {/* FRONTEND */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {data.frontendExperience.map((item) => (
              <article key={item.id} className="experience__details">
                <span className="experience__details-icon">
                  <BsPatchCheckFill />
                </span>
                <div>
                  <h4>{item.experienceName}</h4>
                  <small className="text-light">{item.experienceLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {data.backendExperience.map((item) => (
              <article key={item.id} className="experience__details">
                <span className="experience__details-icon">
                  <BsPatchCheckFill />
                </span>
                <div>
                  <h4>{item.experienceName}</h4>
                  <small className="text-light">{item.experienceLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
