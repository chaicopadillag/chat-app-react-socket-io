import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';

const AuthRouter = () => {
	return (
		<div className="font-sans">
			<div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
				<h1 className="text-center text-blue-500 uppercase p-4 font-bold text-2xl mb-4">Chat Code</h1>
				<div className="relative sm:max-w-sm w-full">
					<div className="card bg-blue-400 shadow-lg w-full h-full rounded-3xl absolute transform -rotate-6"></div>
					<div className="card bg-red-400 shadow-lg w-full h-full rounded-3xl absolute transform rotate-6"></div>
					<div className="relative w-full rounded-3xl px-6 py-4 bg-white shadow-md">
						<Switch>
							<Route exact path="/auth/login" component={LoginPage} />
							<Route exact path="/auth/register" component={RegisterPage} />
							<Redirect to="/auth/login" />
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AuthRouter;
