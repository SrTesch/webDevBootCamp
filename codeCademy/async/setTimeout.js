console.log("I'm learning about");
setTimeout(() => { console.log("Event Loop");}, 2000);
console.log("the");
console.log("This is the first line of code in app.js.");

const usingSTO = () =>{
    console.log("Eu sou lindo");
};

setTimeout(usingSTO, 2000);

console.log("This is the last line of code in app.js.");
