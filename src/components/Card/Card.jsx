import "./Card.scss";
import { useState } from "react";

const Card = ({ name, img, options }) => {
    const [flipped, setFlipped] = useState(false);
    const [purpose, year, creator] = options;
    return (
        <div className="Card" onClick={() => setFlipped(!flipped)}>
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
