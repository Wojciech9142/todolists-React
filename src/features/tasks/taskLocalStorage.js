const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks => 
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () => {
    if(typeof(localStorage.getItem(localStorageKey))=="undefined"){
        return [];
 }else{
    JSON.parse(localStorage.getItem(localStorageKey))
 }
}