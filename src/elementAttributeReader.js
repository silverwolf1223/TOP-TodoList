export default function(element, obj, attribute){
    switch(attribute){
        case "content":
            element.innerHTML = obj[attribute];
            break;
        case "className":
            element.className = obj[attribute];
            break;
        case "type":
            element.type = obj[attribute];
            break;
        case "value":
            element.value = obj[attribute];
            break;
        case "for":
            element.setAttribute('for', obj[attribute]);
            break;
        case "id":
            element.id = obj[attribute];
            break;
        case "onClick":
            element.addEventListener('click', obj[attribute]);
            break;
        case "name":
            element.name = obj[attribute];
            break;
    }
}