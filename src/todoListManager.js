import {ListBuilder} from"./index.js";

export default function(projects){
    const list = document.querySelector(".todoListList");
    list.innerHTML = "";
    projects.forEach(project => {
        const listItem = document.createElement("li");
        listItem.className = "projectListElm";
        listItem.innerHTML = `<button>${project}</button>`;
        listItem.addEventListener('click', () => {
            ListBuilder(project);
        });
        list.appendChild(listItem);
    });
}