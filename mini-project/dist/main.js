"use strict";
const body = document.querySelector("body");
const button = document.querySelector("button");
const header = document.getElementById("parent");
const newDiv = document.createElement("input");
const parentElement = document.getElementById("parent");
const todoListDiv = document.createElement("ol");
const toDoListArray = [];
body === null || body === void 0 ? void 0 : body.append(newDiv);
body === null || body === void 0 ? void 0 : body.append(todoListDiv);
newDiv.className = "new-input-class";
button === null || button === void 0 ? void 0 : button.addEventListener("click", () => {
    addToDoListItem(newDiv.value);
});
const addToDoListItem = (toDoItem) => {
    const todoListItem = document.createElement("li");
    toDoListArray.push(toDoItem);
    let removeIndex = toDoListArray.lastIndexOf(toDoItem);
    todoListItem.setAttribute("id", removeIndex.toString());
    const removeItemButton = document.createElement("button");
    removeItemButton.addEventListener("click", () => {
        const itemToRemove = document.getElementById(removeIndex.toString());
        if (todoListDiv && itemToRemove)
            todoListDiv.removeChild(itemToRemove);
    });
    removeItemButton.textContent = "Remove Item";
    todoListItem.textContent = toDoItem;
    todoListItem === null || todoListItem === void 0 ? void 0 : todoListItem.append(removeItemButton);
    todoListDiv === null || todoListDiv === void 0 ? void 0 : todoListDiv.append(todoListItem);
};
