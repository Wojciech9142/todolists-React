import React, { useState } from 'react';
import Form from "./Form";
import TaskList from './TaskList';
import Buttons from './Buttons';
import Section from '../../common/Section';
import Header from '../../common/Header';
import Container from '../../common/Container';

function Tasks() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "react", done: true, },
    { id: 2, content: "kolacja", done: false, },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  }

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(
      task => task.id !== id
    ));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }


      return task;
    }))
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(
      task => ({ ...task, done: true })
    ));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks => [
      ...tasks,
      {
        content: newTaskContent,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      },
    ])
  }

  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            toggleTaskDone={toggleTaskDone}
            removeTask={removeTask}
            hideDone={hideDone}
            tasks={tasks}
          />}
        extraHeaderContent={
          <Buttons
            toggleHideDone={toggleHideDone}
            tasks={tasks}
            hideDone={hideDone}
            setAllDone={setAllDone}
          />}
      />
    </Container>
  );
}

export default Tasks;
