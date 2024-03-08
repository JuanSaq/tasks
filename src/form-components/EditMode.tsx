import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [isEditMode, setEditMode] = useState<boolean>(false);
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);

    function updateEditMode(event: React.ChangeEvent<HTMLInputElement>) {
        setEditMode(event.target.checked);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <div>
                <Form.Check
                    type={"switch"}
                    id={"edit-mode-check"}
                    label={"Edit Mode"}
                    checked={isEditMode}
                    onChange={updateEditMode}
                />
            </div>
            <div>
                <Form.Group controlId={"editMode"} hidden={!isEditMode}>
                    <Form.Check
                        type={"checkbox"}
                        id={"is-student-check"}
                        label={"Student"}
                        checked={isStudent}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setStudent(event.target.checked)}
                        disabled={!isEditMode}
                    />
                    <Form.Control
                        value={name}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => setName(event.target.value)}
                        disabled={!isEditMode}
                    />
                </Form.Group>
            </div>
            <p>
                {name} is {isStudent ? "" : "not"} a student
            </p>
        </div>
    );
}
