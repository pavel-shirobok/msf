import { IFSM, IState, IStateLink } from "./fsm.interfaces";
import { ICollector } from "array-by-id";
export declare class FSM<S extends IState, L extends IStateLink<S>> implements IFSM<S, L> {
    private _isFinalized;
    private _links;
    private _states;
    private _currentState;
    private _currentLinks;
    constructor();
    goto(nextState: S): S;
    canGoto(state: S): boolean;
    finalize(): void;
    readonly links: ICollector<L>;
    readonly states: ICollector<S>;
    readonly currentState: S;
    readonly currentLinks: L[];
}
