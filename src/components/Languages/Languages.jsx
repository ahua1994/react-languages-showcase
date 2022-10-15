import "./Languages.scss";
import languages from "../../helpers/data";
import Card from "../Card/Card";

const Languages = () => {
    return (
        <div className="Languages">
            <h1 className="title">Languages</h1>
            <div className="card-container">
                {languages.map((x, i) => {
                    return <Card {...x} key={i} />;
                })}
            </div>
        </div>
    );
};

export default Languages;
