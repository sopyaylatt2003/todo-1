import { addTask, getTask, taskRender } from "../task";
import { textInput } from "./selector";


export const addBtnHandler=() => {
    // console.log(textInput.value);

    addTask(textInput.value);
    // console.log(getTask());

    taskRender(getTask());

    textInput.value=null;
   
    
}