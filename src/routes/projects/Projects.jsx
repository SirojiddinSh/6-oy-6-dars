import React from "react";
import "./Projects.css";
import project1 from "../../images/MyProject/project-1.png";
import project2 from "../../images/MyProject/Screenshot_2.png";
import project3 from "../../images/MyProject/Screenshot_3.png";
import project4 from "../../images/MyProject/Screenshot_4.png";
import project5 from "../../images/MyProject/Screenshot_5.png";
import project6 from "../../images/MyProject/Screenshot_6.png";
import project7 from "../../images/MyProject/Screenshot_7.png";
import project8 from "../../images/MyProject/Screenshot_8.png";

const Projects = () => {
    return (
        <div>
            <div className="welcome">
                <div className="welcome__container">
                    <h1 className="welcome__h1">My Projects</h1>
                    <div className="box"></div>
                </div>
            </div>
            <div className="project__cards">
                <div className="project__card">
                    <img src={project1} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/6-oy-1-dars-figma.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://6-oy-1-dars-figma.vercel.app"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project2} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/6-oy-2-dars.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://6-oy-2-dars-rho.vercel.app"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project3} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/6-oy-3-dars.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://6-oy-3-dars-mu.vercel.app/"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project4} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/4-dars.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://4-dars-alpha.vercel.app/"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project5} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/5-dars-figma.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://5-dars-figma.vercel.app/"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project6} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/5-oy_imtihon.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://5-oy-imtihon-coral.vercel.app/"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project7} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/4-dars.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://4-dars-alpha.vercel.app/"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
                <div className="project__card">
                    <img src={project8} alt="" />
                    <div>
                        <a
                            target="_blank
                        "
                            href="https://github.com/SirojiddinSh/6-oy-2-dars.git"
                        >
                            Github
                        </a>
                        <a
                            target="_blank
                        "
                            href="https://6-oy-2-dars-rho.vercel.app"
                        >
                            Sayt
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
