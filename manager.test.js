const { Manager } = require("./index")

let data = []
let emitter = new Manager()

emitter.on(
    "hello",
    (ev) => {
        console.log("Emitter say hello !",ev);
        data.push(ev)
    }
)

test('emit event', () => {
    emitter.emit("hello",{surname:"surname"})
    expect(data.length).toBe(1)
})

test('subscrite event ', () => {
    emitter.emit("hello",{name:"first1"})
    expect(data.length).toBe(2)
})

