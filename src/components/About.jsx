import Shola from "../assets/Shola.jpeg"

export default function About() {
    return (
        <section id="about">
            <div className="text">
                <h6>
                    Hi! My name is
            </h6>
                <h1>
                    SHOLA AYENI.
            </h1>
                <h2>
                    I build things for the web
            </h2>
                <div>
                    <p>
                        I'm a software engineer based in Abuja, Nigeria. I build high performance, scalable and maintainable web applications and web APIs.
                </p>
                </div>
            </div>
            <div className="photo">
                <img src={Shola} alt="Shola Ayeni" />
            </div>
        </section>
    )
}