import {createStore} from "redux";

const reducer = (store = {counter: 0}, action) => {
    if (action.type === 'increase')
        return {counter : store.counter + 1};
    if (action.type === 'decrease')
        return {counter : store.counter - 1};
    return store;
}

const store = createStore(reducer);

export default store;