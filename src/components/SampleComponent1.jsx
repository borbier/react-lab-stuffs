import React, { Component } from 'react';
import SampleComponent2 from './SampleComponent2';

class SampleComponent1 extends Component {
	constructor(props){
		super(props);
		this.state = {
			answer: 0,
			length: 4,
			width: 5
		}
	}

	onAnswer(answer) {
		this.setState({ answer:answer });
	}

	render() {
		const { answer, length, width } = this.state;
		return (
			<div>
				<SampleComponent2 
					length={length}
					width={width}
					_onAnswer={this.onAnswer.bind(this)}
				/>
				<h1>Answer: {answer}</h1>
			</div>
		)
	}
}

export default SampleComponent1;