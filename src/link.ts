import {IState, IStateLink} from "./fsm.interfaces";
import {generateLinkId} from "./utils";


export class StateLink<S extends IState> implements IStateLink<S>{
    constructor(private _startState : S, private _endState : S){
        if(!(_startState && _endState)){
            throw new Error("one of states for link is null");
        }
    }
    
    get id(): string {
        return generateLinkId(this.startState.id, this.endState.id);
    }
    
    get startState(): S {
        return this._startState;
    }

    get endState(): S {
        return this._endState;
    }
}