import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger';

//action name constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENT_BY_AMOUNT = 'incrementByAmount'



//store 
const store = createStore(reducer, applyMiddleware(logger.default))

const history = [];



//reducer-> simple function return state based on action
function reducer(state = { amount: 1 }, action) {
  if (action.type === INCREMENT) {
    //immtability -> updates must always be new object
    return { amount: state.amount + 1 }
  }
  if (action.type === DECREMENT) {
    return { amount: state.amount - 1 }
  }
  if (action.type === RESET) {
    return { amount: 0 }
  }
  if (action.type === INCREMENT_BY_AMOUNT) {
    return { amount: state.amount + action.payload }
  }
  return state;
}

//global state
// store.subscribe(() => {
//   history.push(store.getState())
//   console.log(history)
// })

//Action Creator 
function increment() {
  return { type: INCREMENT }
}
function decrement() {
  return { type: DECREMENT }
}
function reset() {
  return { type: RESET }
}
function incrementByAmount(amount) {
  return { type: INCREMENT_BY_AMOUNT, payload: amount }
}



setInterval(() => { store.dispatch(incrementByAmount(5)) }, 5000)

//action

