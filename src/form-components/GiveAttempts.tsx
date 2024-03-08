import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requests, setRequests] = useState<number>(0);

    function updateAttempts() {
        if (requests) {
            setAttempts(attempts + requests);
            setRequests(0);
        }
    }
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequests(parseInt(event.target.value));
    }
    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts: {attempts}</p>
            <div>
                <Form.Group controlId={"formRequestAttempt"}>
                    <Form.Control
                        type={"number"}
                        value={requests}
                        onChange={updateRequest}
                    ></Form.Control>
                </Form.Group>
            </div>
            <div>
                <Button
                    onClick={() => setAttempts(attempts - 1)}
                    disabled={!attempts}
                >
                    use
                </Button>
                <Button onClick={updateAttempts}>gain</Button>
            </div>
        </div>
    );
}