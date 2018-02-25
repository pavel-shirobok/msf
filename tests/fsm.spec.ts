import {createTestFSM} from "./fsm.utils";
import {IFSM, IState, IStateLink} from "../src";

describe("FSM", ()=>{
    let fsm : IFSM<IState, IStateLink<IState>>;
    
    beforeEach(()=>{
        fsm = createTestFSM();
    });
    
    it('should be created', ()=>{
        expect(fsm).toBeDefined();
    });
    
    it("should be have current action A", ()=>{
        expect(fsm.currentState.id).toBe("A");
    });
    
    it("should goto to available action B", ()=>{
        fsm.goto(fsm.states.getById("B"));
        expect(fsm.currentState.id).toBe("B");
    });
    
    it("should not be able to go to unlinked state", ()=>{
        let goto = ()=>fsm.goto(fsm.states.getById("C"));   
        
        expect(goto).toThrow();
    });
    
    it("should call onEnter/onExit events on current and next states", ()=>{
        
        let current = fsm.currentState;
        let next = fsm.states.getById("B");
        
        spyOn(current, "onExit");
        spyOn(next, "onEnter");
        
        fsm.goto(next);
        
        expect(current.onExit).toHaveBeenCalled();
        expect(next.onEnter).toHaveBeenCalled();
    });
});