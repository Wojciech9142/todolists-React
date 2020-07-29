import React from "react";
import "./style.css";

const Buttons = ({tasks, hideDone}) => (
    tasks.length > 0 && (
        <div className="tasksListOptions">
            <button className="taskListOptions__button"> {hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
            <button className="taskListOptions__button" disabled={tasks.every(({ done }) => done )} >Ukończ wszystkie</button>
        </div>
    )

);

export default Buttons;