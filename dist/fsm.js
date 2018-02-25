"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const array_by_id_1 = require("array-by-id");
const utils_1 = require("./utils");
class FSM {
    constructor() {
        this._isFinalized = false;
        this._states = new array_by_id_1.Collector();
        this._links = new array_by_id_1.Collector();
    }
    goto(nextState) {
        if (!this.canGoto(nextState)) {
            throw new Error(`Can't goto state "${nextState.id}"`);
        }
        if (this._isFinalized) {
            if (this._currentState) {
                this._currentState.onExit();
            }
            nextState.onEnter();
        }
        this._currentState = nextState;
        return this._currentState;
    }
    canGoto(state) {
        if (!this.currentState) {
            return true;
        }
        return this.links.containsById(utils_1.generateLinkId(this.currentState.id, state.id));
    }
    finalize() {
        this._isFinalized = true;
    }
    get links() {
        return this._links;
    }
    get states() {
        return this._states;
    }
    get currentState() {
        return this._currentState;
    }
    get currentLinks() {
        return this._currentLinks;
    }
}
exports.FSM = FSM;
//# sourceMappingURL=fsm.js.map