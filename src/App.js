import React from 'react';
import { HashRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom';
import Author from './features/author/Author';
import TaskPage from './features/tasks/TaskPage';
import TasksPage from './features/tasks/TasksPage'
import { StyledNav, StyledNavLink , StyledUl, StyledLi } from './styled';

function App() {
  return (
    <HashRouter>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <StyledNavLink to="/zadania">
              Zadania
            </StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/author">
              O autorze
            </StyledNavLink>
          </StyledLi>
        </StyledUl>
        <Switch>
          <Route path="/zadania/:id">
            <TaskPage />
          </Route>
          <Route path="/zadania/">
            <TasksPage />
          </Route>
          <Route path="/author">
            <Author />
          </Route>
          <Route path="/">
            <Redirect to="/zadania" />
          </Route>
        </Switch>
      </StyledNav>
    </HashRouter>
  );
};

export default App;
