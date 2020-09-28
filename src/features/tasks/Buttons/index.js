import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";
import "./style.css";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (
            <div className="tasksListOptions">
                <button onClick={() => dispatch(toggleHideDone())} className="taskListOptions__button">{hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
                <button
                    className="taskListOptions__button"
                    disabled={tasks.every(({ done }) => done)}
                    onClick={() => dispatch(setAllDone())}
                >
                    Ukończ wszystkie
        </button>
            </div>
        ));
};

export default Buttons;