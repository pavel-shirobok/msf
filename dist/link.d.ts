import { IState, IStateLink } from "./fsm.interfaces";
export declare class StateLink<S extends IState> implements IStateLink<S> {
    private _startState;
    private _endState;
    constructor(_startState: S, _endState: S);
    readonly id: string;
    readonly startState: S;
    readonly endState: S;
}
