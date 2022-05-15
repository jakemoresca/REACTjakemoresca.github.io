import { GetStaticProps, InferGetServerSidePropsType } from "next/types";
import * as React from "react";
import { DevIcon } from "./components/DevIcon";
import ISkill from "../data/skill";
import { loadSkills } from "./api/skills";

interface ISkillProps
{
    props: ISkill
}

export default function Skills(props: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
            <div className="w-100">
                <h2 className="mb-5">Skills</h2>

                <ul className="list-inline dev-icons">
                    {
                        props.icons.map((x, index: number) => {
                            return (<li key={index} className="list-inline-item">
                                <DevIcon icon={x.css} tooltip={x.name} />
                            </li>)
                        })
                    }
                </ul>

                <div className="subheading mb-3">Proficient in the following technologies / methodologies:</div>
                <ul className="fa-ul mb-0">
                    {
                        props.skills.map((x, index) => {
                            return (<li key={index}>{x}</li>)
                        })
                    }
                </ul>
            </div>
        </section>);
};

export async function getStaticProps(context): Promise<ISkillProps> {
    const response = await loadSkills();
    return { props: response }
}