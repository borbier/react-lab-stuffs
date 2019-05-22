import React, { useState } from 'react';

function IdiotCounter() {
	const [count, setCount] = useState(0);

	return(
		<div>
			<h1>You clicked {count} times</h1>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</div>
	);
}

export default IdiotCounter;