import React from 'react';
import {increment,decrement} from '../actions/action'
import {connect} from 'react-redux'


function App(props) {
 console.log(props);
  return (
    <>
      <button onClick={props.increment}>  + </button>
        <div data-testid='counter'>{props.counter}</div>
      <button onClick={props.decrement}> - </button>
    </>
  );
}

const mapStateToProps = state=>{
  return{
    counter:state.counter
  }
}
// console.log(increment)

const mapDispatchToProps = dispatch =>{
  return{
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
