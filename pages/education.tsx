import * as React from "react";

const Education: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
            <div className="w-100">
                <h2 className="mb-5">Education</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h4 className="mb-0">Technological Institute of the Philippines</h4>
                        <div className="subheading mb-3">Bachelor of Science</div>
                        <div>Information Technology</div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">June 2007 - Apr 2011</span>
                    </div>
                </div>

                <h2 className="mb-5">Trainings</h2>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h4 className="mb-0">Node.js Essential Training</h4>
                        <div className="subheading mb-3">LinkedIn</div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Issued Feb 2022</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h4 className="mb-0">Advanced Node.js</h4>
                        <div className="subheading mb-3">LinkedIn</div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Issued Feb 2022</span>
                    </div>
                </div>

                <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="resume-content">
                        <h4 className="mb-0">React: Ecosystems</h4>
                        <div className="subheading mb-3">LinkedIn</div>
                    </div>
                    <div className="resume-date text-md-right">
                        <span className="text-primary">Issued Feb 2022</span>
                    </div>
                </div>
            </div>
        </section>);
}

export default Education;