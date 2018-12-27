import { createStore } from 'redux';

// Action generators - functions that return action objects

// Destructring 
// const add = ({a, b},c) => {
//     return a+b+c;
// };
// console.log(add({a:10, b:3},100))

// increment count
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
});

// decrement count
const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

// setCount 
const setCount = ({ count }) => ({
    type: 'SET',
    count
})

// resetCount
const resetCount = () => ({
    type: 'RESET',
});

// Reducers
// 1. Reducers are pure function
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};


const store = createStore(countReducer);

// console.log(store.getState());

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

// console.log(store.getState());