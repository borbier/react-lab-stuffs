import React from 'react';
import { connect } from 'react-redux';

import SampleHeading from './components/SampleHeading.jsx';
import SampleComponent1 from './components/SampleComponent1.jsx';
import IdiotCounter from './components/IdiotCounter';

import Action from './actions';
import ReduxCounter from './components/ReduxCounter';

const topicStyle = {
  fontSize: '20px',
  color: '#581845'
}

function App(props) {
  return (
    <div>
      <p style={topicStyle}>Sample Components with props parsing</p>
      <SampleHeading name="borBier" />
      <hr/>
      <p style={topicStyle}>Parsing some props to another components</p>
      <SampleComponent1 length={5} width={5} />
      <hr/>
      <p style={topicStyle}>Just an idiot counter (with React hook)</p>
      <IdiotCounter />
      <hr/>
      <p style={topicStyle}>Idiot counter (with React Redux)</p>
      <ReduxCounter 
        value={props.counter}
        onIncrement={() => props.increment()}
        onDecrement={() => props.decrement()}
      />
    </div>
  );
}

const mapStateToProps = (state) => ({
  counter: state.counter
})

const mapDispatchtoProps = (dispatch) => ({
  increment: () => dispatch({type: Action.INCREMENT, text: "INCREMENT Redux"}),
  decrement: () => dispatch({type: Action.DECREMENT, text: "DECREMENT Redux"})
})

export default connect(mapStateToProps, mapDispatchtoProps)(App);
