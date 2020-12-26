import phone from "../assets/telephone.svg"
import mail from "../assets/envelope.svg"
import github from "../assets/github.svg"
import linkedin from "../assets/linkedin.svg"

export default function Contact() {
    return (
        <section id="contact" >
            <h3>Get In Touch</h3>
            <div className="social-links">
                <ul>
                    <li>
                        <a href="tel:+2347068785102" target="_blank" rel="noreferrer">
                            <img src={phone} alt="Phone Icon" />
                            <span>Phone</span>
                        </a>
                    </li>
                    <li>
                        <a href="mailto:ayenis@yahoo.com" target="_blank" rel="noreferrer">
                            <img src={mail} alt="Email Icon" />
                            <span>Email</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/ayenisholah" target="_blank" rel="noreferrer">
                            <img src={github} alt="Github Icon" />
                            <span>Github</span>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/ayenishola/" target="_blank" rel="noreferrer">
                            <img src={linkedin} alt="LinkedIn Icon" />
                            <span>LinkedIn</span>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    )
}