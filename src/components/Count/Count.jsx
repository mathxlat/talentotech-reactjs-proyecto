import { useState } from "react";
import "./Count.css";

export function Count({ buttonText, onConfirm }) {
    const [count, setCount] = useState(1);

    const increment = () => {
        setCount((value) => value + 1);
    };

    const decrement = () => {
        setCount((value) => (value > 0 ? value - 1 : 0));
    };

    const handleConfirm = () => {
        if (count > 0) {
            onConfirm(count);
        }
    };

    return (
        <div className="count-container">
            <div className="count-buttons">
                <button
                    className="count-button"
                    onClick={decrement}
                    disabled={count === 0}
                >
                    -
                </button>
                <span className="count-number">{count}</span>
                <button className="count-button" onClick={increment}>
                    +
                </button>
            </div>

            <button
                className="count-button-add"
                onClick={handleConfirm}
                disabled={count === 0}
            >
                {buttonText}
            </button>
        </div>
    );
}
