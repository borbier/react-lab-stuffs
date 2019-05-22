import { Component } from 'react';

class SampleComponent2 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			length: this.props.length,
			width: this.props.width
		}
	}

	componentDidMount() {
		let answer = this.state.length * this.state.width;
		this.props._onAnswer(answer);
	}

	render() {
		return(null);
	}
}

export default SampleComponent2;