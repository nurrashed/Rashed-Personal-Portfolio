import contacts from "./data";
import contactImage from "./../../assets/contact.png";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a message via any of the links below!</p>
      <div data-aos="fade-up">
        <div className="contact-avatar">
          <img src={contactImage} alt="Contact" />
        </div>
        <div className="container contact__container">
          {contacts.map((contact) => (
            <a
              key={contact.id}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {contact.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
