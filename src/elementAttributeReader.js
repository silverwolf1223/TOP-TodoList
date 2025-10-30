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
        case "content":
            element.innerHtml = obj[attribute];
            break;
        case "content":
            element.innerHtml = obj[attribute];
            break;
        case "content":
            element.innerHtml = obj[attribute];
            break;
        case "onClick":
            element.addEventListener('click', obj[attribute]);
            break;
            
    }
}