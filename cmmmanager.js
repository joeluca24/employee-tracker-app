const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root24",
    database: "employee_tracker_db"
});

function  adddepartment(){
    return inquirer.prompt([
        {
            message: "What is the name of the department?",
            name: "name",
            type: "input"
        }
    ])
    .then( response =>{
        connection.query("INSERT INTO department SET ?", response, (err, result) => {
            console.log("Created");
            showMenu();
        });
    })
}
const showMenu = () => {
    return inquirer.prompt([
        {
            message: "What would you like to do?",
            choices: ["add department", "view department", "update department", "delete department", "exit"],
            name: "menuitem",
            type: "list"
        }
    ])
        .then(response => {
            switch (response.menuitem) {
                case "add department":
                    return adddepartment();

                default:
                    connection.end();
            }
        });
}

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected, Thread id: " + connection.threadId);
    showMenu();
});
