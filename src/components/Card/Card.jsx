import "./Card.scss";
import { useState } from "react";

const Card = ({ name, img, options }) => {
    const [flipped, setFlipped] = useState(false);
    const [purpose, year, creator] = options;
    return (
        <div
            style={{
                backgroundColor: !flipped ? "rgb(108,99,255)" : "gold",
                color: !flipped ? "goldenrod" : "brown",
            }}
            className="Card"
            onClick={() => setFlipped(!flipped)}
        >
            {!flipped ? (
                <>
                    <img src={img} alt={name} />
                    <p>{name}</p>
                </>
            ) : (
                <ul>
                    <li>{purpose}</li>
                    <li>{year}</li>
                    <li>{creator}</li>
                </ul>
            )}
        </div>
    );
};

export default Card;
