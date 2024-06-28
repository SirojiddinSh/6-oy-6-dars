import React from "react";
import "./Home.css";
import homeImg from "../../images/home-img.avif";

const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <div className="home__img">
                    <img src={homeImg} alt="" />
                </div>
                <div className="home__info">
                    <h4>Full Stack Developer</h4>
                    <h2>DevRos</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Tenetur eligendi doloremque illo delectus perferendis
                        sit molestias, deleniti quo voluptatem ea non ducimus
                        repellat saepe distinctio repellendus provident cum
                        tempora accusamus ratione harum modi iste! Vel quis
                        esse, cupiditate pariatur rerum sequi obcaecati facere
                        vero nam doloribus laudantium impedit cum corrupti!
                    </p>
                    <div className="home__btn">
                        <a href="/projects">
                            <button>Projects</button>
                        </a>
                        <a href="/contact">
                            <button>contact</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
