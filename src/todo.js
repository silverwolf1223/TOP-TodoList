export default function createTodo(title, description, timeLine, project) {
    this.title = title;
    this.description = description;
    this.timeLine = timeLine;
    this.project = project;
    this.isCompleted = false;
}