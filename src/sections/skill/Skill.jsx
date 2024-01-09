import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import data from "./data";
import "./skill.css";

const skill = () => {
  return (
    <section id="skill">
      <h2>My Skills</h2>
      <p>
        <big>
          <b class="animate-charcter">
            <q>Every skill you acquire doubles your odds of success</q>- Scott
            Adams
          </b>
        </big>
      </p>

      <div className="container skill__container">
        {/* FRONTEND */}
        <div className="skill__frontend" data-aos="zoom-in-up">
          <h3>Frontend Development</h3>
          <div className="skill__content">
            {data.frontendSkill.map((item) => (
              <article key={item.id} className="skill__details">
                <span className="skill__details-icon">
                  <BsPatchCheckFill />
                </span>
                <div>
                  <h4>{item.skillName}</h4>
                  <small className="text-light">{item.skillLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div className="skill__backend" data-aos="zoom-in-up">
          <h3>Backend Development</h3>
          <div className="skill__content">
            {data.backendSkill.map((item) => (
              <article key={item.id} className="skill__details">
                <span className="skill__details-icon">
                  <BsPatchCheckFill />
                </span>
                <div>
                  <h4>{item.skillName}</h4>
                  <small className="text-light">{item.skillLevel}</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default skill;
