import React from "react";
import "./Kub.css";

const Kub = () => {
    return (
        <div className="kub">
            <div className="body">
                <div className="cube">
                    <div className="top"></div>
                    <div className="bottom"></div>
                    <div className="left"></div>
                    <div className="right"></div>
                    <div className="front"></div>
                    <div className="back"></div>
                </div>
                <div className="shadow"></div>
            </div>
        </div>
    );
};

export default Kub;
