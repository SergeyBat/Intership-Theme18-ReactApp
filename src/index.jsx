import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Root from './routes/root';
import Search from './routes/pages/Search/Search';
import MyList from './routes/pages/MyList/MyList';
import store from './redux/store'
import {Provider} from 'react-redux';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root/>}>
      <Route path="/search" element={<Search/>}/>
      <Route path="/my-list" element={<MyList/>}/>
    </Route>
  ))


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);