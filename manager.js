class Manager {

    constructor(){
        this.events = {}
    }

    emit(eventName="", params={}){
        // emit event
        if (Object.keys(this.events).includes(eventName)) {
            for (const eventCalbak of this.events[eventName]) {
                eventCalbak(params)
            }
        } else {
            console.error("event don't exist");
        }
    }

    on(eventName="", calback=()=>{}){
        // subscrite to event
        if (Object.keys(this.events).includes(eventName)) {
            this.events[eventName].push(calback)    
        }else{
            this.events[eventName] = [calback]
        }
    }

    remove(eventName=""){
        // remove event
        delete this.events[eventName]
    }

}


module.exports = {Manager}