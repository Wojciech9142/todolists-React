import React from "react";
import "./style.css";

const Tasks = (props) => (
    <ul className="tasksList">
        {props.tasks.map(task => (
            <li
            key="task.id" className={`taskList__item${task.done && props.hideDoneTasks ? " taskList__item--hidden" : ""}`}
            >
                <div className="taskList__toggleButton">
                    {(task.done) ? "✔" : ""}
                </div>
                <span className={`${task.done ? "taskList__item--done" : ""} `} > 
                {task.content} 
                </span>
                <div className="taskList__removeButton">
                    🗑
                </div>
            </li>
        ))}
    </ul>
);

export default Tasks;