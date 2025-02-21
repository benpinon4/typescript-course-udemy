const body = document.querySelector("body");
const button = document.querySelector("button");
const header = document.getElementById("parent");

const newDiv = document.createElement("input");
const parentElement = document.getElementById("parent");
const todoListDiv = document.createElement("ol");

const toDoListArray: string[] = [];

body?.append(newDiv);

body?.append(todoListDiv);

newDiv.className = "new-input-class";

button?.addEventListener("click", () => {
  addToDoListItem(newDiv.value);
});

const addToDoListItem = (toDoItem: string): void => {
  const todoListItem = document.createElement("li");
  toDoListArray.push(toDoItem);
  let removeIndex = toDoListArray.lastIndexOf(toDoItem);
  todoListItem.setAttribute("id", removeIndex.toString());
  const removeItemButton = document.createElement("button");

  removeItemButton.addEventListener("click", (): void => {
    const itemToRemove = document.getElementById(removeIndex.toString());
    if (todoListDiv && itemToRemove) todoListDiv.removeChild(itemToRemove);
  });
  removeItemButton.textContent = "Remove Item";
  todoListItem.textContent = toDoItem;
  todoListItem?.append(removeItemButton);
  todoListDiv?.append(todoListItem);
};
