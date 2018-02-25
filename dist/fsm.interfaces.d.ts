import { ICollector, IId } from "array-by-id";
export interface IFSM<S extends IState, L extends IStateLink<S>> {
    links: ICollector<L>;
    states: ICollector<S>;
    currentState: S;
    currentLinks: L[];
    goto(state: S): S;
    canGoto(state: S): boolean;
    finalize(): void;
}
export interface IState extends IId {
    active: boolean;
    onEnter(): any;
    onExit(): any;
}
export interface IStateLink<S extends IState> extends IId {
    startState: S;
    endState: S;
}
export interface IStatePlugin<S extends IState> {
    onEnter(state: S): any;
    onExit(state: S): any;
}
