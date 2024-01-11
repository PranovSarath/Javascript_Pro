const todo = {
    priority: "",
    task: "Finish Editing Course",
};

console.log(todo.priority ||= "MEDIUM");


console.log(todo.priority || (todo.priority = "MEDIUM"));

