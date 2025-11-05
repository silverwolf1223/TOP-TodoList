import createTodo from "./todo.js";
import attributeReader from"./elementAttributeReader.js";
import projectLister from "./todoListManager.js";
import "./styles.css";

export {ListBuilder};

let todoArray = [];

let projectList = ["mainProject", "homeWork", "tomorrowChores"];

let currentProject = projectList[0];

todoArray.push(new createTodo("Eat dinner", "gotta make and eat dinner", "2 hours", "mainProject"));
todoArray.push(new createTodo("Do Home Work", "finish World History Essay", "3 days", "mainProject"));
todoArray.push(new createTodo("clean Room", "start laundry, throw trash, vacuum", "6 hours", "tomorrowChores"));

const body = document.querySelector("body");

const layout = [{"className": "title", "content": "To Do List", "Element": "h1"}, 
        {"className": "todoListList", "Element": "ul"},
        {"className": "todoList", "Element": "ul"},
        {"className": "todoInput", "content": "New Todo", "Element": "button", "onClick": newToDoForm},
    ];

const DomBuilder = function(build){
    build.forEach(obj =>{
        const element = document.createElement(obj["Element"]);
        Object.keys(obj).forEach(key =>{
            attributeReader(element, obj, key);
        });
        body.appendChild(element);
    });
};

const ListBuilder = function(project){
    const list = document.querySelector(".todoList");
    list.innerHTML = "";
    currentProject = project;
    todoArray.forEach(todo => {
        if(todo.project == project)
        {
            const listItem = document.createElement("li");
            listItem.innerHTML = `<input type="checkbox"><h3>${todo.title}</h3><h5>${todo.timeLine} left</h5><div>${todo.description}</div></input>`;
            list.appendChild(listItem);
        }
    });
}

const domManager = function(){
    DomBuilder(layout);
    ListBuilder(currentProject);
    projectLister(projectList);
}();

function setCurrent()
{

}





const todoFormObjs = [{"Element": "label", "content": "Item title: ", "for": "title"}, {"Element": "input", "id": "title", "name": "title","type": "text"},
    {"Element": "label", "content": "Item time line: ", "for": "timeLine"},{"Element": "input", "id": "timeLine", "name": "timeLine","type": "text"},
    {"Element": "label", "content": "Please provide a discription for your task: ", "for": "description"},{"Element": "input", "id": "description", "name": "description", "type": "text"},
    {"Element": "button", "onClick": newToDo, "content": "submit"}
]

function newToDoForm(){
    if(document.querySelector(".todoForm")){
        document.querySelector(".todoForm").remove();
    }

    const newToDoForm = document.createElement("ul");
    newToDoForm.className = "todoForm";

    todoFormObjs.forEach(obj => {
        const formElement = document.createElement("li")
            const formInput = document.createElement(obj["Element"]);
            Object.keys(obj).forEach(key => {
                attributeReader(formInput, obj, key);
            })
            formElement.appendChild(formInput);
        newToDoForm.appendChild(formElement);
    })

    body.appendChild(newToDoForm);
}

function newToDo(){
    todoArray.push(new createTodo(document.getElementById('title').value, document.getElementById('description').value, document.getElementById('timeLine').value, currentProject));
    ListBuilder(currentProject);
    document.querySelector(".todoForm").remove();
}