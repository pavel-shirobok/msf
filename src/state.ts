import {IState} from "./fsm.interfaces";


export class State implements IState{
    private _active : boolean = false;
    
    constructor(private _id : string){}

    onEnter() {
        this._active = true;
    }

    onExit() {
        this._active = false;
    }

    get active() : boolean {
        return this._active;
    }
    
    get id(){
        return this._id;
    }
}