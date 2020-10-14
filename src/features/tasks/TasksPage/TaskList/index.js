import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation } from "react-router-dom";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from '../../tasksSlice';
import { Tasks, Button, TaskItem, TaskContent } from './styled';

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get("szukaj");

  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);
  const dispatch = useDispatch();
  return (
    <Tasks className="tasksList">
      {tasks.map(task => (
        <TaskItem
          key={task.id} hidden={hideDone && task.done}
        >
          <Button
            onClick={() => dispatch(toggleTaskDone(task.id))}
            toggle
          >
            {(task.done) ? "✔" : ""}
          </Button>
          <TaskContent done={task.done} >
            <Link to={`/zadania/${task.id}`}>{task.content}</Link>
          </TaskContent>
          <Button
            onClick={() => dispatch(removeTask(task.id))}
            remove
          >
            🗑
                    </Button>
        </TaskItem>
      ))}
    </Tasks>
  );
};


export default TaskList;