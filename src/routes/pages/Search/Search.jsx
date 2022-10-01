import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './Search.scss'
import React, { useState } from 'react';

function Search() {
	const [responseSearch, setResponseSearch] = useState([])

	
	return (
		<>
			<SearchPanel responseSearch = { responseSearch } setResponseSearch = { setResponseSearch } />
			<DisplayType />
			<div className="wrapperPosts">
				<Posts displayType='postsTile' responseSearch={responseSearch} />
			</div>

		</>
	);
}

export default Search;
