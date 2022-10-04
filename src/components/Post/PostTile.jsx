import './PostTile.scss'
import { Tag } from '../Tag/Tag'
import Star from './Star'
import Button from '../Button/Button'

const PostTile = ({ item, dataActivity=false, onClick, ...props } = props) => {

	if (Number(item.stargazers_count) >= 1000){
		item.stargazers_count = (item.stargazers_count / 1000).toFixed(1) + 'k'
	}


	return (
		<div className="postTile"  >
			<div className="additionalInformationTile">
				<span className="languageTile">
					{item.language}
				</span>
				<div className="ratingTile">
					<Star className='starTile' />
					<span className='stargazers_countTile'>{item.stargazers_count}</span>
				</div>
			</div>
			<div className='postDescriptionTile'>
				<h2 className="titlePostTile">
					{item.name}
				</h2>
				<span className='textPostTile'>
					{item.description}
				</span>
				<div className="tagsTile">
					{item.topics.map((e, index) => (
						<Tag key={index + e} tag={e} />
					))}
				</div>
			</div>
			<Button dataActivity={item.dataActivity} className="button buttonTile" onClick={onClick} id={item.id} />
		</div>
	)

}

export default PostTile