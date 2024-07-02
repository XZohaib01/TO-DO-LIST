#! /usr/bin/env node

import inquire from "inquirer";

let todos: string[] = [];
let loop = true;

while (loop) {
    let todoList: {
        todo: string;
        addMore: boolean;
    } = await inquire.prompt(
        [
            {
                name: "todo",
                message: "what would you like to add in your todos list?",
                type: "input"
            },

            {
                name: "addMore",
                type: "confirm", //type is confirm answer is in yes or no.
                message: "Are you sure would you like to add more in your todos list?",
                default: "false"
            }
        ]
    );
    let { todo, addMore } = todoList;
    console.log(todoList);
    loop = addMore;
    if (todo) {
        todos.push(todo);
    } else {
        console.log("Kindly enter valid input");
    }
    console.log(todos)
    if (todos.length > 0) {
        console.log("Your todo list:");
        todos.forEach((todo) => {
            console.log(todo)
        });
    } else {
        console.log("Not todo found");
    }
};