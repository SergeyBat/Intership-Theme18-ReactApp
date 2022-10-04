import SearchPanel from '../../../components/SearchPanel/SearchPanel';
import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './Search.scss'
import { useOutletContext } from 'react-router-dom';

const Search = () => {
	const context = useOutletContext()
	const { displayType, setDisplayType, responseSearch, setResponseSearch, myList, setMyList, changeMyList } = context
	const keySearch = 'mylist'

	return (
		<>
			<SearchPanel responseSearch={responseSearch} myList={myList} setResponseSearch={setResponseSearch} />
			<DisplayType displayType={displayType} setDisplayType={setDisplayType} />
			<div className="wrapperPosts">
				<Posts displayType={displayType} posts={responseSearch} responseSearch={responseSearch} myList={myList}
					setMyList={setMyList} dataActivity="false" keyPreValue={keySearch} changeMyList={changeMyList} />
			</div>
		</>
	);
}

export default Search;
