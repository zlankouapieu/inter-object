# inter-object
communicate between objects.
communicate reactjs components

# example 
```js
const { Manager } = require("inter-object")

let data = []
let emitter = new Manager()

emitter.on(
    "hello",
    (ev) => {
        console.log("Emitter say hello !",ev);
        data.push(ev)
    }
)

emitter.emit("hello",{surname:"surname"})

```