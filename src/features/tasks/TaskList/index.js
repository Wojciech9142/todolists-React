import React from "react";
import "./style.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleTaskDone, removeTask, selectHideDone } from '../tasksSlice';

const TaskList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();
    return (
        <ul className="tasksList">
            {tasks.map(task => (
                <li
                    key={task.id} className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}
                >
                    <div
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                        className="taskList__toggleButton"
                    >
                        {(task.done) ? "✔" : ""}
                    </div>
                    <span className={`${task.done ? "taskList__item--done" : ""} `} >
                        {task.content}
                    </span>
                    <div
                        onClick={() => dispatch(removeTask(task.id))}
                        className="taskList__removeButton"
                    >
                        🗑
                    </div>
                </li>
            ))}
        </ul>
    );
};


export default TaskList;