import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    return (
        <div>
            <h3>Check Answer</h3>
            <div>
                <Form.Group controlId={"formAnswerResponse"}>
                    <Form.Label>Answer</Form.Label>
                    <Form.Control value={answer} onChange={updateAnswer} />
                </Form.Group>
            </div>
            <div>Answer: {answer === expectedAnswer ? "✔️" : "❌"}</div>
        </div>
    );
}
