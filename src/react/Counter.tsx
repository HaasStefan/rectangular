
import React, { useState } from 'react';
import ReactHost from './ReactHost';

const Counter: React.FC = () => {
	const [count, setCount] = useState(0);

	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1);

	return (
		<ReactHost>
			<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
				<h2>Counter</h2>
				<div style={{ fontSize: '2rem' }}>{count}</div>
				<div>
					<button onClick={decrement} style={{ marginRight: '1rem' }}>-</button>
					<button onClick={increment}>+</button>
				</div>
			</div>
		</ReactHost>
	);
};

export default Counter;
