import createTodo from "./todo.js";
import attributeReader from"./elementAttributeReader.js";
import "./styles.css";

let todoArray = [];

todoArray.push(new createTodo("Eat dinner", "gotta make and eat dinner", "2 hours"));
todoArray.push(new createTodo("Do Home Work", "finish World History Essay", "3 days"));
todoArray.push(new createTodo("clean Room", "start laundry, throw trash, vacuum", "6 hours"));

const body = document.querySelector("body");

const layout = [{"className": "title", "content": "To Do List", "Element": "h1"}, 
        {"className": "list", "content": "", "Element": "ul"},
        {"className": "todoInput", "content": "New Todo", "Element": "button", "onClick": newToDo},
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

const ListBuilder = function(){
    const list = document.querySelector(".list");
    todoArray.forEach(todo => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `<input type="checkbox"><h3>${todo.title}</h3><h5>${todo.timeline} left</h5><div>${todo.description}</div></input>`;
        list.appendChild(listItem);
    });
}

const domManager = function(){
    DomBuilder(layout);
    ListBuilder();
}();

function newToDo(){
    
}