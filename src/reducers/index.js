const initialState = {
    counter:0
}
export default function reducer(state=initialState,action){
    switch(action.type){
        case 'increment':
            return Object.assign({},state,{
                counter:state.counter+1
            })
        case 'decrement':
            return Object.assign({},state,{
                counter:state.counter-1
            })
        default : return state
    }
}
