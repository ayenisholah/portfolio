import styled from "styled-components";
import { Link } from "react-scroll";
import about from "../../assets/about.svg"
import experience from "../../assets/experience.svg"
import contact from "../../assets/contact.svg"
import resume from "../../assets/resume.svg"
import tools from "../../assets/settings.svg"



const UL = styled.ul`
  width: 70%;
  list-style-type: none;
  display: flex;
  justify-content: space-between;

  li {
    display: flex;
    align-items: center;
  }

  li > a {
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    letter-spacing: -0.08px;
    line-height: 20.0167px;
    color: #091928;
    cursor: pointer;
  }

  li > img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }

  #resume {
    border: 1px solid #091928;
    padding: 10px;
    border-radius: 5px;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 60px;
    right: 0;
    height: 100vh;
    padding: 0 40px;
    border-top: 1px solid #e1e4e8;
    transition: transform 0.3s ease-in-out;

    li {
      margin-top: 60px;
      a {
        color: #091928;
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: -0.08px;
        line-height: 34.3167px;
      }
    }
  }
`;

export default function RightNav({ open, setOpen }) {
  return (
    <UL className="info" open={open}>
      <li>
        <img src={about} alt="About Icon" />
        <Link onClick={() => setOpen(false)} activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          delay={500}
          duration={500}>
          About
        </Link>
      </li>
      <li>
        <img src={tools} alt="Settings Icon" />
        <Link onClick={() => setOpen(false)} activeClass="active"
          to="tools"
          spy={true}
          smooth={true}
          offset={0}
          delay={500}
          duration={500}>
          Tools
        </Link>
      </li>
      <li>
        <img src={experience} alt="Experience Icon" />

        <Link to="experience"
          spy={true}
          smooth={true}
          offset={0}
          delay={500}
          duration={500} onClick={() => setOpen(false)}>
          Experience
        </Link>
      </li>
      <li>
        <img src={contact} alt="Contact Icon" />

        <Link to="contact"
          spy={true}
          smooth={true}
          delay={500}
          offset={0}
          duration={500} onClick={() => setOpen(false)}>
          Contact
        </Link>
      </li>
      <li id="resume">
        <img src={resume} alt="Resume Icon" />

        <Link to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500} onClick={() => setOpen(false)}>
          Resume
        </Link>
      </li>
    </UL>
  );
}