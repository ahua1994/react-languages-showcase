import React from "react";
import svg from "../../assets/react.svg";
import "./Banner.scss";

const Banner = () => {
    return (
        <div className="Banner">
            <img src={svg} alt="react" />
        </div>
    );
};

export default Banner;
