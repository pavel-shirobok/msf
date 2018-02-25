"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("./utils");
class StateLink {
    constructor(_startState, _endState) {
        this._startState = _startState;
        this._endState = _endState;
        if (!(_startState && _endState)) {
            throw new Error("one of states for link is null");
        }
    }
    get id() {
        return utils_1.generateLinkId(this.startState.id, this.endState.id);
    }
    get startState() {
        return this._startState;
    }
    get endState() {
        return this._endState;
    }
}
exports.StateLink = StateLink;
//# sourceMappingURL=link.js.map