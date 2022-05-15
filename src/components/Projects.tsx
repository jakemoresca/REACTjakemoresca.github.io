import * as React from "react";
import formway1 from "../img/formway-1.png";

export const Projects: React.FunctionComponent = () =>
{
    return (
        <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
            <div className="w-100">
                <h2 className="mb-5">Projects</h2>

                <div className="container">
                    <h5 className="mt-0 row">
                        <a href="http://formway.ph">Formway</a>
                    </h5>
                    <p className="row">
                        A single page website created for a client. Utilizes Bootstrap 3 and jQuery.
                    </p>
                    <div className="row">
                        <img src={formway1} className="mr-3 image-thumbnail" alt="Formway preview" />
                    </div>
                </div>

                <div className="container mt-5">
                    <h5 className="mt-0 row"><a href="https://github.com/jakemoresca/TicketNowNetCore">TicketNowNetCore</a></h5>
                    <p className="row">My rewrite on my previous cinema ticketing project using .NET Core, Blazor, Vue.js, MongoDB and RabbitMQ</p>
                </div>

                <div className="container mt-5">
                    <h5 className="mt-0 row"><a href="https://github.com/jakemoresca/Archiver">Archiver</a></h5>
                    <p className="row">Archives file on a specific directory based on regex pattern and last modified date.  Built-on .NET Framework.</p>
                </div>

                <div className="container mt-5">
                    <h5 className="mt-0 row"><a href="https://github.com/jakemoresca/Juan-Life">Juan Life</a></h5>
                    <p className="row">RPG Farming Game. Built using RPG Maker MV.</p>
                </div>

                <div className="container mt-5">
                    <h5 className="mt-0 row"><a href="https://github.com/jakemoresca/Vehicle-Plot-Delivery">Vehicle Plot Delivery</a></h5>
                    <p className="row">Test implementation of Sender and Receiver using RabbitMQ, .NET Core and storage via Redis.</p>
                </div>

                <div className="container mt-5">
                    <h5 className="mt-0 row"><a href="https://github.com/jakemoresca/React-Typescript-Starter-Template">React Typescript starter Template</a></h5>
                    <p className="row">My modified starter template for creating Typescript, .NET Core, and React.</p>
                </div>
            </div>

        </section>
    );
}