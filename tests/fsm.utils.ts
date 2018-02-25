import {FSM, State, StateLink} from "../src";
import {IFSM} from "../src/fsm.interfaces";


export function createTestFSM() : IFSM<State, StateLink<State>> {
    
    let fsm = new FSM<State, StateLink<State>>();
    let A = fsm.states.add( new State("A") );
    let B = fsm.states.add( new State("B") );
    let C = fsm.states.add( new State("C") );
    let D = fsm.states.add( new State("D") );
    let E = fsm.states.add( new State("E") );
    
    fsm.links.add( new StateLink( A, B) );
    fsm.links.add( new StateLink( B, A) );
    fsm.links.add( new StateLink( B, C) );
    fsm.links.add( new StateLink( C, D) );
    fsm.links.add( new StateLink( D, C) );
    fsm.links.add( new StateLink( D, A) );
    
    fsm.goto(A);
    
    fsm.finalize();
    
    return fsm;
}