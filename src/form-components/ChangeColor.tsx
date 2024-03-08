import React, { useState } from "react";
import { Form } from "react-bootstrap";
const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "cyan",
    "magenta",
    "white",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>(COLORS[0]);

    /*function updateColor(event: React.ChangeEvent<HTMLSelectElement>) {
        setColor(event.target.value);
    }*/

    return (
        <div>
            <h3>Change Color</h3>
            <div>
                <Form.Group controlId={"Colors"}>
                    {COLORS.map((acolor) => (
                        <Form.Check
                            inline
                            type={"radio"}
                            name={"response"}
                            key={acolor}
                            value={acolor}
                            label={
                                <span style={{ backgroundColor: acolor }}>
                                    {acolor}
                                </span>
                            }
                            onChange={(e) => setColor(e.target.value)}
                            checked={color === acolor}
                        />
                    ))}
                </Form.Group>
            </div>
            <div>
                You have chosen{" "}
                <span
                    style={{ backgroundColor: color }}
                    data-testid="colored-box"
                >
                    {color}
                </span>
            </div>
        </div>
    );
}
