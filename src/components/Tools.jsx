import Azure from "../assets/azure-1.svg"
import CSharp from "../assets/c--4.svg"
import Css from "../assets/css3.svg"
import Html from "../assets/html-5.svg"
import JavaScript from "../assets/javascript.svg"
import Linux from "../assets/linux-tux.svg"
import Postgresql from "../assets/postgresql.svg"
import Python from "../assets/python-4.svg"
import Reactlogo from "../assets/react.svg"
import Git from "../assets/git-icon.svg"
import Node from "../assets/nodejs-icon.svg"
import MongoDB from "../assets/mongodb-icon-1.svg"


export default function Tools() {
    return (
        <section id="tools">
            <h3>
                Here are a few technologies I've been working with recently:
            </h3>
            <div className="icons">
                <img src={Html} alt="HTML" />
                <img src={Css} alt="CSS" />
                <img src={JavaScript} alt="JS" />
                <img src={CSharp} alt="CSharp" />
                <img src={Azure} alt="Azure Icon" />
                <img src={Python} alt="PYTHON" />
                <img src={Reactlogo} alt="REACT" />
                <img src={Node} alt="REACT" />
                <img src={Postgresql} alt="POSTGRESQL" />
                <img src={MongoDB} alt="POSTGRESQL" />
                <img src={Git} alt="Git" />
                <img src={Linux} alt="Linux" />
            </div>
        </section>
    )
}