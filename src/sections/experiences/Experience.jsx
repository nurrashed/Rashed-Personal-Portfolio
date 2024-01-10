import Card from "../../components/Card";
import data from "./data";
import "./experiences.css";
const Experiences = () => {
  return (
    <section id="experiences">
      <h2>My Job Experiences</h2>
      <p>
        <big>
          <b class="animate-charcter">
            <q>The object of living is work, experience, happiness</q>- Henry
            Ford
          </b>
        </big>
      </p>
      <div className="container experiences__container" data-aos="fade-up">
        {data.map((item) => (
          <Card key={item.id} className="experience light">
            <div className="experience__icon">{item.icon}</div>
            <div style={{ width: "100%" }} className="experience__details">
              <div className="jobHeaderContainer">
                <div className="jobNameContainer">
                  <p className="jobName">{item.positionName}</p>
                  <p
                    className="companyName"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {item.companyName}
                  </p>
                </div>
                <div className="jobDuration">
                  <p>{item.date}</p>
                  <p>{item.locationName}</p>
                </div>
              </div>
              <p style={{ padding: "10px 0px 0px" }}>{item.desc}</p>
              <ul style={{ listStyle: "circle" }}>
                {item.experienceOne !== "" ? (
                  <li style={{ listStyle: "outside", paddingTop: "6px" }}>
                    {item.experienceOne}
                  </li>
                ) : (
                  ""
                )}
                {item.experienceTwo !== "" ? (
                  <li style={{ listStyle: "outside", paddingTop: "6px" }}>
                    {item.experienceTwo}
                  </li>
                ) : (
                  ""
                )}

                {item.experienceThree !== "" ? (
                  <li style={{ listStyle: "outside", paddingTop: "6px" }}>
                    {item.experienceThree}
                  </li>
                ) : (
                  ""
                )}
                {item.experienceFour !== "" ? (
                  <li style={{ listStyle: "outside", paddingTop: "6px" }}>
                    {item.experienceFour}
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
