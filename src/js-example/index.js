import { sayHelloTo } from "hi";

var array = [1, 2, 3];

Array.from(array).forEach($item => {
    console.log($item);
    sayHelloTo($item);
});
