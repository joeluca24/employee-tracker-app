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
function updatedepartment() {
    // console.log("name")

    // read the department choices from the database
    // which department?
    // user selects the department
    // what do you want the name to be
    // user has to give the name
    // update the database
    connection.query("SELECT * FROM department", (err, result) => {
        if (err) throw err;

        // console.table(result);
        let departmentChoices = result.map(department => {
            return {
                name: department.name,
                value: department

            }
        });
        return inquirer.prompt([
            {
                message: "which deparment",
                name: "department",
                type: "list",
                choices: departmentChoices
            },
            {
                message: "what do you want the name to be ?",
                name: "name",
                type: "input"

            }
        ])
            .then(response => {
                // console.log(response);
                // showMenu();
                connection.query("UPDATE department SET name = ? WHERE id = ?;", [response.name, response.department.id], (err, result) => {
                    if (err) throw err;
                    console.log("Updated using");
                    console.table(result);
                    viewdepartment();
                });
            })
    });

}

// DELETE FROM department  WHERE id = 2;
function deletedepartment() {
    // console.log("name")

    // read the department choices from the database
    // which department?
    // user selects the department
    // delete from the database
    connection.query("SELECT * FROM department", (err, result) => {
        if (err) throw err;

        // console.table(result);
        let departmentChoices = result.map(department => {
            return {
                name: department.name,
                value: department

            }
        });
        return inquirer.prompt([
            {
                message: "which deparment",
                name: "department",
                type: "list",
                choices: departmentChoices
            }
        ])
            .then(response => {
                // console.log(response);
                // showMenu();
                connection.query(" DELETE FROM department  WHERE id =?;", [response.department.id], (err, result) => {
                    if (err) throw err;
                    console.log("deleted using");
                    console.table(result);
                    viewdepartment();
                });
            })
    });

}
function viewdepartment() {
    //console.log("name")
    connection.query("SELECT * FROM department", (err, result) => {
        if (err) throw err;
        console.log("Viewing departments");
        console.table(result);
        showMenu();
    });
}
function adddepartment() {
    return inquirer.prompt([
        {
            message: "What is the name of the department?",
            name: "name",
            type: "input"
        }
    ])
        .then(response => {
            connection.query("INSERT INTO department SET ?", response, (err, result) => {
                if (err) throw err;
                console.log("Created using");
                console.table(result);
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
                case "view department":
                    return viewdepartment();
                case "update department":
                    return updatedepartment();
                case "delete department":
                    return deletedepartment();

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
