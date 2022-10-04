import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './MyList.scss'
import { useOutletContext } from 'react-router-dom';

const MyList = () => {
	const context = useOutletContext()
	const { displayType, setDisplayType, myList, responseSearch, setMyList, changeMyList } = context
	const keyMyList = 'mylist';

	return (
		<>
			<h1 className='title'> My List</h1>
			<DisplayType displayType={displayType} setDisplayType={setDisplayType} />
			<div className="wrapperPosts">
				<Posts displayType={displayType} posts={myList} responseSearch={responseSearch} myList={myList} setMyList={setMyList} dataActivity="true" keyPreValue={keyMyList} changeMyList={changeMyList} />
			</div>
		</>
	);
}

export default MyList;
