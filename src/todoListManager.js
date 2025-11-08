import {ListBuilder, removeProject, createProjectForm} from"./index.js";

export default function(projects){
    const list = document.querySelector(".todoListList");
    list.innerHTML = "";
    let listItem = document.createElement("li");
    listItem.innerHTML = `<button>+</button>`;
    listItem.querySelector('button').addEventListener('click', () => createProjectForm());
    list.appendChild(listItem);
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.className = "projectListElm";
        listItem.innerHTML = `<button>${project}</button>`;
        listItem.addEventListener('click', () => {
            ListBuilder(project);
        });
        list.appendChild(listItem);
    });
    listItem = document.createElement("li");
    listItem.innerHTML = `<button>-</button>`;
    listItem.querySelector('button').addEventListener('click', () => removeProject());
    list.appendChild(listItem);
}