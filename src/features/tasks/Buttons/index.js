import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import {
    toggleHideDone,
    selectHideDone,
    selectAreTasksEmpty,
    setAllDone,
    fetchExampleTasks,
    selectIsEveryTaskDone
} from "../tasksSlice";
import { Button, Wrapper } from './styled';

const Buttons = () => {
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);
    console.log(hideDone);

    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pokaż przykładowe zadania
            </Button>
            {!areTasksEmpty > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                    <Button
                        disabled={isEveryTaskDone}
                        onClick={() => dispatch(setAllDone())}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );

};

export default Buttons;