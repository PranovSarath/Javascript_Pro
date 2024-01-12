const todo = {
    priority: "",
    task: "Finish Editing Course",
};

console.log(todo.priority ||= "MEDIUM");

console.log(todo.priority || (todo.priority = "MEDIUM"));




//Logical AND=

let num = 99;

num &&= 50;
console.log(num);
