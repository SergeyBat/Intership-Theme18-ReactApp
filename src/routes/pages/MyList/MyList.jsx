import DisplayType from '../../../components/DisplayType/DisplayType';
import Posts from '../../../layout/Posts/Posts';
import './MyList.scss'

function MyList() {
	return (
		<>
			<h1 className='title'> My List</h1>
			<DisplayType />
			<div className="wrapperPosts">
				<Posts displayType='postsTile' />
			</div>
		</>
	);
}

export default MyList;
