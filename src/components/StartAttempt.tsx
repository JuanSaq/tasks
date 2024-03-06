import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempt] = useState<number>(4);
    const [inProgress, setProgress] = useState<boolean>(false);

    return (
        <div>
            <p>
                {" "}
                Attempts: <span>{attempts}</span>
            </p>
            <div>
                <Button
                    onClick={() => {
                        setProgress(true);
                        setAttempt(attempts - 1);
                    }}
                    disabled={inProgress || !attempts}
                >
                    Start Quiz
                </Button>
                <Button
                    onClick={() => setProgress(false)}
                    disabled={!inProgress}
                >
                    Stop Quiz
                </Button>
                <Button
                    onClick={() => setAttempt(attempts + 1)}
                    disabled={inProgress}
                >
                    Mulligan
                </Button>
            </div>
        </div>
    );
}
