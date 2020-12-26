import {createStore} from 'redux';
import reducer from '../reducers/index'


export const store = createStore(reducer);
const unsubscribe = store.subscribe(()=>{console.log("Store changed :",store.getState())});

export function increment(){
    store.dispatch({
        type:'increment'
    })
}

export function decrement(){
    store.dispatch({
        type:'decrement'
    })
}
