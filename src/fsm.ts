import {IFSM, IState, IStateLink} from "./fsm.interfaces";
import {Collector, ICollector} from "array-by-id";
import {generateLinkId} from "./utils";

export class FSM<S extends IState, L extends IStateLink<S>> implements IFSM<S, L>{
    private _isFinalized : boolean = false;
    private _links: ICollector<L>;
    private _states: ICollector<S>;
    private _currentState: S;
    private _currentLinks: L[];
    
    constructor(){
        this._states = new Collector();
        this._links = new Collector();
    }
    
    goto(nextState: S): S {
        if( !this.canGoto(nextState) ){
            throw new Error(`Can't goto state "${nextState.id}"`);
        }
        
        if(this._isFinalized){
            if(this._currentState ) {
                this._currentState.onExit();
            }
            nextState.onEnter();
        }
        
        this._currentState = nextState;
        
        return this._currentState;
    }
    
    canGoto(state: S): boolean {
        if( !this.currentState ) {
            return true;
        }
        return this.links.containsById(generateLinkId(this.currentState.id, state.id));  
    }
    
    finalize(){
        this._isFinalized = true;
    }
    
    get links(): ICollector<L> {
        return this._links;
    }

    get states(): ICollector<S> {
        return this._states;
    }

    get currentState(): S {
        return this._currentState;
    }

    get currentLinks(): L[] {
        return this._currentLinks;
    }
}