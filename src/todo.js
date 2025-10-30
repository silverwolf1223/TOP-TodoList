export default function createTodo(title, description, timeLine) {
    this.title = title;
    this.description = description;
    this.timeLine = timeLine;
    this.isCompleted = false;
}