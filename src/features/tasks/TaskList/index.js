import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from '../tasksSlice';
import { Tasks, Button, TaskItem, TaskContent } from './styled';

const TaskList = () => {
  const tasks = useSelector(selectTasks);
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
            {task.content}
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