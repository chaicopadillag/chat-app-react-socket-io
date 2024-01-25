import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import ChatPage from '../pages/ChatPage';
import UiLoading from '../ui/UiLoading';
import AuthRouter from './AuthRouter';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
	const { auth, verifyToken } = useContext(AuthContext);

	useEffect(() => {
		verifyToken();
	}, [verifyToken]);

	if (auth?.checking) {
		return <UiLoading />;
	}

	return (
		<BrowserRouter>
			<Switch>
				<PublicRoute isAutenticated={auth.logged} path="/auth" component={AuthRouter} />
				<PrivateRoute isAutenticated={auth.logged} exact path="/" component={ChatPage} />
				<Redirect to="/auth" />
			</Switch>
		</BrowserRouter>
	);
};

export default AppRouter;
