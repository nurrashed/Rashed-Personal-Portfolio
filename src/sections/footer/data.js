import { AiFillGithub } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

export const links = [
  { id: 1, link: "#", title: "Home" },
  { id: 2, link: "#about", title: "About" },
  { id: 3, link: "#skill", title: "Skills" },
  { id: 4, link: "#experiences", title: "Experiences" },
  { id: 5, link: "#portfolio", title: "Portfolio" },
  { id: 6, link: "#contact", title: "Contact" },
];

export const socials = [
  {
    id: 1,
    link: "https://www.linkedin.com/in/nur-mohammad-rashed-frontend-javascript-react-web-developer/",
    icon: <AiOutlineLinkedin />,
  },
  { id: 2, link: "https://github.com/nurrashed", icon: <AiFillGithub /> },
];
