import * as React from "react";
import { DevIcon } from "./DevIcon";

export const Skills: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <ul className="list-inline dev-icons">
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-csharp-line" tooltip="C#" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-dot-net-plain-wordmark" tooltip=".NET Framework / .NET Core" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-html5-plain-wordmark" tooltip="HTML5" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-css3-plain-wordmark" tooltip="CSS3" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-javascript-plain" tooltip="Javascript" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-typescript-plain" tooltip="Typescript" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-jquery-plain-wordmark" tooltip="jQuery" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-react-original-wordmark" tooltip="React" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-less-plain-wordmark" tooltip="Less" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-amazonwebservices-plain-wordmark" tooltip="AWS" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-visualstudio-plain" tooltip="Visual Studio" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-git-plain-wordmark" tooltip="Git" colored />
                    </li>
                    <li className="list-inline-item">
                        <DevIcon icon="devicon-mongodb-plain-wordmark" tooltip="MongoDB" colored />
                    </li>
                </ul>

                <div className="subheading mb-3">Proficient in the following technologies / methodologies:</div>
                <ul className="fa-ul mb-0">
                    <li>
                        C#, .NET Core, Entity Framework, WCF</li>
                    <li>
                        ASP.NET, ASP.NET MVC, Web Forms, Win Forms</li>
                    <li>
                        Javascript, Typescript, HTML5, CSS3, LESS, Bootstrap</li>
                    <li>
                        jQuery, React, Redux, Typescript, KnockoutJs, BackboneJs</li>
                    <li>
                        SQL Server, PostgreSql, MongoDB, Redis
                    </li>
                    <li>
                        Rhino Mock, Moq, xUnit, jasmine, mocha, sinon, chai, Jest, Enzyme
                    </li>
                    <li>
                        Visual Studio, VS Code, Git, Azure DevOps, Continuous Integration, Continuous Delivery
                    </li>
                    <li>
                        SOLID, OOP, Pair Programming, Agile, Scrum, TDD, Microservices, CQRS, DDD
                    </li>
                    <li>
                        Node.js, npm, Nuget
                    </li>
                    <li>
                        IBM AppScan, OWASP, Veracode, SonarQube
                    </li>
                    <li>
                        AWS, Azure, Amazon SQS, EC2, Load balancer, Cloud Formation, Elastic Search, Docker, RabbitMQ
                    </li>
                </ul>
            </div>
        </section>);
}