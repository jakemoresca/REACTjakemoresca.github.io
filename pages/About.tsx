import * as React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faGithub, faFacebookF } from '@fortawesome/free-brands-svg-icons'

const About: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
            <div className="w-100">
                <h1 className="mb-0">Page Under 
                    <span className="text-primary"> Renovation</span>
                </h1>
                <div className="subheading mb-5">

                </div>
                <p className="lead mb-5">
                    
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