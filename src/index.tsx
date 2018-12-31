const myName = "Fabien";
const greetings = `Hello, I’m ${myName}`;
console.log(greetings);

if (module.hot) {
    module.hot.accept();
}
