import * as React from "react";
import Image from "next/image";
import { InferGetServerSidePropsType } from "next/types";
import { IPersonalProject } from "./data/project";
import { loadProjects } from "./api/projects";

interface IProjectProps
{
    props: IPersonalProject
}

export default function Projects(props: InferGetServerSidePropsType<typeof getStaticProps>) {
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>

                {
                    props.projects.map((x, index) => {
                        return (<div key={index} className={x.containerClassName}>
                            <h5 className="mt-0 row">
                                <a href={x.url}>{x.name}</a>
                            </h5>
                            <p className="row">
                                {x.description}
                            </p>
                            { x.imageSrc ? 
                                <div className="row">
                                    <Image src={x.imageSrc}
                                        className="mr-3 image-thumbnail" height="234" width="600" alt={`${x.name} Preview`} />
                                </div> : null
                            }
                        </div>);
                    })
                }
            </div>

        </section>
    );
}

export async function getStaticProps(context): Promise<IProjectProps> {
    const response = await loadProjects();
    return { props: response }
}