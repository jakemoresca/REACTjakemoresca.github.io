import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const About: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">Jake Daryl
                    <span className="text-primary"> Moresca</span>
                </h1>
                <div className="subheading mb-5">
                    +34 610 968 531
                    <a href="mailto:jmoresca@outlook.com"> jmoresca@outlook.com</a>
                </div>
                <p className="lead mb-5">
                    Senior Software Engineer with more than 10 years of industry experience on delivering high quality of work with acceptable timeline. My proficiency on C# and .NET Framework makes me committed on improving my work and knowledge on software development.
                </p>
                <div className="social-icons">
                    <a href="https://www.linkedin.com/in/jake-daryl-moresca/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                    <a href="https://github.com/jakemoresca">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;