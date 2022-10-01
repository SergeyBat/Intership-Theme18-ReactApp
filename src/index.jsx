import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {
	createBrowserRouter,
	RouterProvider,
	Route,
	createRoutesFromElements
} from "react-router-dom";
import Root from './routes/root';
import Search from './routes/pages/Search/Search';
import ErrorPage from './errorPage';
import MyList from './routes/pages/MyList/MyList';


const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route path="/search" element={<Search />} />
			<Route
				path="/my-list"
				element={<MyList />}
			/>
		</Route>
	));


const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);