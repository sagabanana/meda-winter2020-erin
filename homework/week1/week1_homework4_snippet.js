// This is the start of a function definition, it has the name of "myFunction", and has two parameters to hold incoming data, "option1" and "option2".
function myFunction(option, option2) {

    // 'product' is a variable which holds the result of multiplication of option, option 2
    let product = option * option2;

    // Log out the result of the product variable
    console.log(product);

    // Log out the string: "The value of the option parameter is" and the value of the option that user entered in
    console.log("The value of the option parameter is " + option);

    //If statement check option is equal to zero if true then it will step into the first if statement and returns "Everything is good!"
    if (option === 0) {
        
        // 'return' keyword ends 'myFunction' and outputs "Everything is good!"
        return "Everything is good!";
    // only when the earlier 'if' statement is 'false', JavaScript will continue to evalute the next 'else if' statement and check option is equal to 1 if (option is equal to 1) is 'true' then it will return "An error happened!"
    } else if (option === 1) {
        
        //'return' keyword ends 'myFunction' and outputs "An error happened!" 
        return "An error happened!";
    // only when the previous 'else if' statement is false, Javascript will continue evaluate the next 'else if' statement and checks option is equal to -1 if (option is equal to -1) is 'true' then it will return "Everything is bad!"
    } else if (option === -1) {
        
        // 'return' keyword ends "myFunction" and outputs "Everything is bad!"
        return "Everything is bad!";
    }

}

//'result' is a varible which holds the result of myFunction(1, 11) console logs 11, "The value of the option parameter  is 1" in the console assigns variable 'result' as "An error happened!"
let result = myFunction(1, 11);
//'result2' is a variable which holds the result of myFunction(2, 200) console logs 400, "The value of the option parameter is 2" in the console.  Assigns variable 'result2' as 'undefined'
let result2 = myFunction(2, 200);

//both of 'result' and 'result2' are 'true' then JavaScript will step into this 'if' statement.  Since result equals "An error happened!" and result2 equals undefined; if statement will be console log "Catastrophic failure."
if ( result === "An error happened" && result2 === "An error happened") {

    // JavaScript will log out in the console "Catastropic failure." only if both result and result2 evaluate to 'true'
    console.log("Catastrophic failure.");

}