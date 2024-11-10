import React from 'react'
export function counterReducer(state, action) {
    const oldState = {...state}
    if(action.type==='INCREMENT')
        oldState.count++;
    if(action.type==='DECREMENT')
        oldState.count--;
    if(action.type==='RESET')
        oldState.count=0;
    return oldState;
}

function App() {
    const [state,dispatch] = React.useReducer(counterReducer,{count: 0})
    return (
        <div id="app">
            <h1>The (Final?) Counter</h1>
            <p id="actions">
                <button onClick={()=>dispatch({ type: 'INCREMENT' })
                }>Increment</button>
                <button onClick={()=>dispatch({ type: 'DECREMENT' })
                }>Decrement</button>
                <button onClick={()=>dispatch({ type: 'RESET' })
                }>Reset</button>
            </p>
            <p id="counter">{state.count}</p>
        </div>
    );
}

export default App;
