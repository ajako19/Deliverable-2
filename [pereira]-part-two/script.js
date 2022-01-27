let name = prompt("What is your name?");
console.log(name);

let gameCount = prompt("Would you like to play 3 or 6 times?");
console.log(gameCount);

if (gameCount == 3) {
    let x = prompt("How many putts for hole 1?");
    let y = prompt("How many putts for hole 2?");
    let z = prompt("How many putts for hole 3?");

    let par = +x + +y + +z;

    if (par > 9) {
        console.log("Nice try, " + (name) + "... Your total par was +" + (par - 9));
    }

    if (par < 9) {
        console.log("Great job, " + (name) + "! Your total par was: " + (par - 9));
    }

    if (par == 9) {
        console.log("Good game, " + (name) + ". Your total par was: 0")
    }
}

if (gameCount == 6) {
    let a = prompt("How many putts for hole 1");
    let b = prompt("How many putts for hole 2");
    let c = prompt("How many putts for hole 3");
    let d = prompt("How many putts for hole 4");
    let e = prompt("How many putts for hole 5");
    let f = prompt("How many putts for hole 6");

    let par = +a + +b + +c + +d + +e + +f;

    if (par > 18) {
        console.log("Nice try, " + (name) + "... Your total par was +" + (par - 18));
    }

    if (par < 18) {
        console.log("Great job, " + (name) + "! Your total par was: " + (par - 18));
    }

    if (par == 18) {
        console.log("Good game, " + (name) + ". Your total par was: 0");
    }
}

