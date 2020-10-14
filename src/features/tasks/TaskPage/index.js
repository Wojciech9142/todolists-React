import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTaskById } from '../tasksSlice';
import Container from '../../../common/Container';
import Header from '../../../common/Header';
import Section from '../../../common/Section';

export default () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header title="Zadanie" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😥"}
                body={task ? `Ukończone: ${task.done ? "Tak" : "Nie"}` : ""}
            />
        </Container>
    )
}