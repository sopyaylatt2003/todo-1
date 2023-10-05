import { addBtnHandler } from "./app/handler";
import { addBtn } from "./app/selector";

const listener=() => {
    addBtn.addEventListener("click",addBtnHandler)
}

const initTodo=() => {
    console.log("Todo start");
    listener();
}

export default initTodo;