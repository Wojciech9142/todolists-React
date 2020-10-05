import { takeEvery, call, put, delay } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { fetchExampleTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler(){
    try{
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    }
    catch(error){
        yield call(alert, error);
    }
};

export function* watchFetchExampleTasks() {
    delay(1000);
    console.log("Saga jest podłączona");
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
};