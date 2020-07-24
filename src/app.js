import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from '../src/components/Shared/navigation/header';
import Home from '../src/containers/home';

const App = () => {
	return (
		<div>
			<Router>
				<Header />
				<Home />
			</Router>
		</div>
	);
};

export default App;
