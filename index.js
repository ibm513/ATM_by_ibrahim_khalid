



import inquirer from "inquirer";
let correct_pass = /^[0-9]{4}$/;
let correct_username = /[a-z][0-9]/;
// let correct_username_2 = //;
let pass_try = 3;
let current_balance = 1000;
let x;
let y;
let z;
let a;
let b;
let x1;
let x2;
// USERNAME LOOP
while ((!correct_username.test(x))) {
    let username = await inquirer.prompt([
        {
            type: "input",
            name: "input_username",
            message: "Please enter username:",
        },
    ]);
    x = username.input_username;
    if (correct_username.test(x)) {
    }
    else {
        console.log("Please enter valid username (username cannot be empty and space cannot be used in username)");
    }
}
// PASSSORD LOOP
while (correct_username.test(x) &&
    pass_try >= 1) {
    let password = await inquirer.prompt([
        {
            type: "input",
            name: "input_password",
            message: "Please enter password:",
        },
    ]);
    y = password.input_password;
    if (correct_pass.test(y)) {
        break;
    }
    else {
        while (!correct_pass.test(y)) {
            if (pass_try == 1) {
                pass_try -= 1;
                console.log(`You have entered invalid password 3 times. Your account have be blocked. Please contact your bank`);
                console.log(`Thankyou for using our ATM`);
                break;
            }
            else {
                if (pass_try <= 3 && pass_try >= 2) {
                    pass_try -= 1;
                    console.log(`Please enter valid password`);
                    break;
                }
            }
        }
    }
}
// ACCOUNT TYPE LOOP
while (correct_pass.test(y)) {
    let account_type = await inquirer.prompt([
        {
            type: "list",
            name: "input_accounttype",
            message: "Please enter account type:",
            choices: ["Current Account", "Saving Account"],
        },
    ]);
    z = account_type.input_accounttype;
    break;
}
//TRANSACTION LOOP
let transaction = await inquirer.prompt([
    {
        type: "list",
        name: "input_transaction",
        message: "Please select the transaction",
        choices: [
            " 1000",
            " 2000",
            " 5000",
            " 10000",
            " 10000",
            "Balance Inquiry",
            "Other Amount",
        ],
    },
]);
a = transaction.input_transaction;
while (a != "Other Amount") {
    if (a == "Balance Inquiry") {
        console.log(`Your current balance is Rs ${current_balance}`);
    }
    else {
        if (a != "Balance Inquiry") {
            let confirmation = await inquirer.prompt([
                {
                    type: "list",
                    name: "input_confirmation",
                    message: "Please confirm",
                    choices: ["Yes", "No"],
                },
            ]);
            b = confirmation.input_confirmation;
            if (b == "No") {
                console.log(`Thankyou for using our ATM`);
            }
            else {
                if (current_balance < parseInt(a)) {
                    console.log(`You don't have sufficent balance`);
                }
                else {
                    console.log(`Please collect your cash`);
                    console.log(`Your remaining balance is ${current_balance - parseInt(a)}`);
                    console.log(`Thankyou for using our ATM`);
                }
            }
        }
    }
    break;
}
while (a == "Other Amount") {
    let other_amount = await inquirer.prompt([
        {
            type: "number",
            name: "input_otheramount",
            message: "Please enter transaction amount:",
        },
    ]);
    x1 = other_amount.input_otheramount;
    if (current_balance >= x1) {
        console.log(`Please collect your cash`);
        console.log(`Your remaining balance is ${current_balance - x1}`);
        console.log(`Thankyou for using our ATM`);
    }
    else {
        console.log(`You don't have sufficent balance`);
    }
    break;
}
