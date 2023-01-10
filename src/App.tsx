import { useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/Routes';

const App = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<>
			<p>{isAuthenticated ? 'You are logged in' : 'You are not logged in'}</p>
			<button onClick={() => setIsAuthenticated(!isAuthenticated)}>
				{isAuthenticated ? 'Logout' : 'Login'}
			</button>
			<BrowserRouter>
				<p>
					To go to about page, <Link to="/about">click here</Link>.
				</p>
				<AppRoutes isAuthenticated={isAuthenticated} />
			</BrowserRouter>
		</>
	);
};

export default App;
