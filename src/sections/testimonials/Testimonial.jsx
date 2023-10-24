import Card from "../../components/Card";

const Testimonial = ({ testimonial }) => {
  return (
    <Card className="light">
      <div style={{ paddingTop: "2rem" }}></div>
      <div className="testimonial__client-avatar">
        <img src={testimonial.avatar} alt="Testimonial Avatar" />
      </div>
      <div style={{ textAlign: "center", paddingTop: "1rem" }}>
        <h3>{testimonial.name}</h3>
        <p style={{ paddingTop: ".6rem", fontWeight: "600" }}>
          {testimonial.profession}
        </p>
      </div>

      <p style={{ textAlign: "justify", paddingTop: "1.7rem" }}>
        {testimonial.quote1}
      </p>
      <br></br>
      <p style={{ textAlign: "justify" }}>{testimonial.quote2}</p>
    </Card>
  );
};

export default Testimonial;

/* 

<Card className="light">
      <p style={{ textAlign: "justify" }}>{testimonial.quote1}</p>
      <br></br>
      <p style={{ textAlign: "justify" }}>{testimonial.quote2}</p>
      <div className="testimonial__client">
        <div className="testimonial__client-avatar">
          <img src={testimonial.avatar} alt="Testimonial Avatar" />
        </div>
        <div className="testimonial__client-details">
          <h6>{testimonial.name}</h6>
          <small>{testimonial.profession}</small>
        </div>
      </div>
    </Card>
*/
