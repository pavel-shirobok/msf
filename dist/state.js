"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class State {
    constructor(_id) {
        this._id = _id;
        this._active = false;
    }
    onEnter() {
        this._active = true;
    }
    onExit() {
        this._active = false;
    }
    get active() {
        return this._active;
    }
    get id() {
        return this._id;
    }
}
exports.State = State;
//# sourceMappingURL=state.js.map