import * as React from "react";
import IExperience from "../data/experience";
import { loadExperiences } from "./api/experiences";
import { GetStaticProps, InferGetServerSidePropsType } from "next/types";

interface IExperienceProps {
    props: IExperience
}

export default function Experience(props: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Experience</h2>
                {
                    props.workExperience.map((x, index) => {
                        return (
                            <div key={index} className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                                <div className="resume-content">
                                    <h3 className="mb-0">{x.position}</h3>
                                    <div className="subheading mb-3">{x.company}</div>
                                    <ul>
                                        {x.responsibilities.map((y, index) => {
                                            return (<li key={index}>{y}</li>);
                                        })}
                                    </ul>
                                </div>
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">October 2020 - Present</span>
                                </div>
                            </div>);
                    })
                }
            </div>

        </section>
    );
}

export async function getStaticProps(context): Promise<IExperienceProps> {
    const response = await loadExperiences();
    return { props: response }
}