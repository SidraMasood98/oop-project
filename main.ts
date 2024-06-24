#! /usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk"

//create class
class Person {
    private _personality : string;
    constructor() {
        this._personality = 'Mystery';
    }

    //user input
    userInput(input:string) {

        //if else statement:
        if(input.includes ('talk to others about yourself openly')){
            this._personality = 'talk happily'
        } else if(input.includes ('keep your words to yourself')){
            this._personality = 'talk rudely'
        }
    }
    //create function:
    get personality(){
        return this._personality
    }
}


//create object
class main{
    public async main(){
        //await called out
        const ans = await inquirer.prompt(
            {
                type: "list",
                name: "choice",
                message: chalk.yellow ('tell your behaviour?'),
                choices: ["1- talk to others about myself",
                         "2- keep quite and dont ask any questions"
                        ]
            })

            // create personal class
            let myPerson = new Person()
            myPerson.userInput(ans.choice);

            //output response
            console.log(`You are ${myPerson.personality}`)
    }
}


const myObject = new main();
myObject.main();
