import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                value={newTaskContent}
                className="form__inputElement"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <button className="form__buttonElement">Dodaj zadanie</button>
        </form>
    );
};

export default Form;