import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [question, setQuestion] = useState<QuestionType>(
        "short_answer_question"
    );

    function flipQuestion(): void {
        setQuestion(
            question === "short_answer_question"
                ? "multiple_choice_question"
                : "short_answer_question"
        );
    }
    function renderQuestion(): string {
        return question === "short_answer_question"
            ? "Short Answer"
            : "Multiple Choice";
    }
    return (
        <div>
            <Button onClick={flipQuestion}>Change Type</Button>
            <div>Current QuestionType: {renderQuestion()}</div>
        </div>
    );
}
