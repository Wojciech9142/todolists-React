import React from 'react';
import Form from "./Form";
import Tasks from './Tasks';
import Buttons from './Buttons';
import Section from './Section';
import Header from './Header';
import Container from './Container';

const tasks = [
  { id: 1, content: "react", done: true, },
  { id: 2, content: "kolacja", done: false, },
];

const hideDoneTasks = false;

function App() {
  return (
    <div className="App">
      <Container className="container">
        <Header title="Lista zadań" />

        <Section title="Dodaj nowe zadanie" body={<Form />} />

        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </Container>
    </div>
  );
}

export default App;
