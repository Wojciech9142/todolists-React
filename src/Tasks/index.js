import React from "react";
import "./style.css";

const Tasks = ({ toggleTaskDone, tasks, hideDone, removeTask }) => (
    <ul className="tasksList">
        {tasks.map(task => (
            <li
                key={task.id} className={`taskList__item${task.done && hideDone ? " taskList__item--hidden" : ""}`}
            >
                <div
                    onClick={() => toggleTaskDone(task.id)}
                    className="taskList__toggleButton"
                >
                    {(task.done) ? "✔" : ""}
                </div>
                <span className={`${task.done ? "taskList__item--done" : ""} `} >
                    {task.content}
                </span>
                <div
                    onClick={() => removeTask(task.id)}
                    className="taskList__removeButton"
                >
                    🗑
                </div>
            </li>
        ))}
    </ul>
);

export default Tasks;