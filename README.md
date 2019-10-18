# inter-object
connect objects, use for communique react component

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