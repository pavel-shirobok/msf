import { IState } from "./fsm.interfaces";
export declare class State implements IState {
    private _id;
    private _active;
    constructor(_id: string);
    onEnter(): void;
    onExit(): void;
    readonly active: boolean;
    readonly id: string;
}
