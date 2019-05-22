import React, { Component } from 'react';

class ReduxCounter extends Component {
  render() {
    const { value, onIncrement, onDecrement } = this.props;
    return(
			<div>
				<p>Clicked : {JSON.stringify(value)} times</p>
				<button onClick={onIncrement}>+ Add</button>
				<button onClick={onDecrement}>- Subtract</button>
			</div>
    )
  }
}

export default ReduxCounter;