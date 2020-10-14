import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../../tasksSlice';
import { nanoid } from "@reduxjs/toolkit";
import { Form, Button } from './styled'
import Input from "../../Input";

const FormElement = () => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();

        dispatch(addTask({
            content: newTaskContent,
            done: false,
            id: nanoid(),
        }));

        setNewTaskContent("");
    };

    return (
        <Form onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                className="form__inputElement"
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </Form>
    );
};

export default FormElement;