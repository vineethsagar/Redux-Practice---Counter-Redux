import React from 'react';
import {increment,decrement} from '../actions/action'
import {connect} from 'react-redux'


function App(props) {
// console.log();
  return (
    <div id='main'>
      <button onClick={increment}>+</button>
        <div data-testid='counter'>{props.counter}</div>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = state=>{
  return{
    counter:state.counter
  }
}

export default connect(mapStateToProps)(App);
