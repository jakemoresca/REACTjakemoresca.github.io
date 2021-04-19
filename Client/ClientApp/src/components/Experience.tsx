import * as React from "react";

export const Experience: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Senior Software Engineer</h3>
                        <div className="subheading mb-3">EPAM</div>
                        <ul>
                            <li>Implemented pipelines for creating and building NuGet packages and depencies.</li>
                            <li>Created rule based generation tool for generating dynamic data based on a defined specification.</li>
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">October 2020 - Present</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Senior Software Engineer</h3>
                        <div className="subheading mb-3">Infor</div>
                        <ul>
                            <li>Worked as a Technical Lead for the whole team which is responsible for the overall architecture of the solution. Co-leads a technical scrum team together with other sub-team technical leads.</li>
                            <li>Upgraded CPQ’s designer legacy SPA implementation from using KnockoutJs and Backbone to using React, Redux built using Typescript.</li>
                            <li>Successfully implemented Jest and Enzyme as a new test framework for testing React components and Redux reducers. This speeds up writing test by 80% faster due to the built-in snapshot testing included in Jest and Enzyme.</li>
                            <li>Rebuilt Infor CPQ’s LESS compiler algorithm to lessen the compilation time from 30 seconds down to less than a second.</li>
                            <li>Minimizes code review efforts by developing a set of tools to improve integration test readability and reusability. </li>
                            <li>Successfully led Microsoft Dynamics 365 integration to Infor CPQ by developing REST and SOAP APIs on a microservices architecture.</li>
                            <li>Implemented Amazon SQS for Infor CPQ’s external notification services which can be consumed for Birst analytics. </li>
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">November 2018 - October 2020</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Software Engineer</h3>
                        <div className="subheading mb-3">Infor</div>
                        <ul>
                            <li>Reduced merging effort for our business objects by 80%. This was accomplished by refactoring the business object publishing logic, continuous collaboration with our development head, and as a part of my initiative during his visit on our office.</li>
                            <li>Led the security and source code scanning to make sure that every microservices were compliant and secured.</li>
                            <li>Started the initiative for using React on Infor CPQ designer application by recreating knockout view models and templates into a React components and uses Redux for state management.</li>
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">November 2015 - November 2018</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h3 className="mb-0">Associate Software Engineer</h3>
                        <div className="subheading mb-3">Infor</div>
                        <ul>
                            <li>Successfully implemented proof of concepts of using Bootstrap grid system and LESS.js into Infor Product Configurator’s styling engine.</li>
                            <li>Resolved a bug for one of our key customers that makes the management team happy.</li>
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2014 - November 2015</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between">
                    <div className="resume-content">
                        <h3 className="mb-0">Software Developer</h3>
                        <div className="subheading mb-3">Stellar</div>
                        <ul>
                            <li>Created fast and beautiful in-house applications.</li>
                            <li>Conducted several product roadshows to team leads, managers, and executives.</li>
                            <li>Understand and follows the company’s Software Development Life Cycle.</li>
                        </ul>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">July 2011 - July 2014</span>
                    </div>
                </div>

            </div>

        </section>
        );
}