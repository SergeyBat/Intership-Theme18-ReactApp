import Header from '../layout/Header/Header';
import Footer from '../layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import React, { useState } from 'react';

const Root = () => {

	const [displayType, setDisplayType] = useState('Tile')
	const [responseSearch, setResponseSearch] = useState([])
	const [myList, setMyList] = useState([])

	const changeMyList = ({ target }, id) => {
		const objElement = {el: undefined}
		objElement.el = responseSearch.find(e => e.id === id)
		if (objElement.el === undefined) {
			objElement.el = myList.find(e => e.id === id)
		}
		if (objElement.el.dataActivity === "false") {
			if (myList.length !== 0 && myList.find(element => element.id === id)) {
				return
			}
			const item = responseSearch.find(element => {
				objElement.el.dataActivity = "true"
				if (element.id === id) {
					return element
				}
			})
			setMyList([...myList, item])
		} else if (objElement.el.dataActivity === "true") {
			objElement.el.dataActivity = "false"
			const list = myList.filter((element) => element.id !== id)
			setMyList(list)
		}
	}

	return (
		<div className="App">
			<Header className='header' classForLink='menu-list__link' />
			<div className="container">
				<Outlet context={{ displayType, setDisplayType, responseSearch, setResponseSearch, myList, setMyList, changeMyList }} />


			</div>
			<Footer className='footer' />
		</div>
	);
}

export default Root;
