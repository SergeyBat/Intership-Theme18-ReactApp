import './PostTile.scss'
import { Tag } from '../Tag/Tag'
import Star from './Star'
import Button from '../Button/Button'

const PostTile = ({ id = 0, title = "TruyGhost/Ghost", text = 'The platform for professional publishers', tag = "cms", stargazers_count = "25k", language = "JavaScript", dataActivity, ...props } = props) => {
	return (
		<div className="postTile">
			<div className="additionalInformationTile">
				<span className="languageTile">
					{language}
				</span>
				<div className="ratingTile">
					<Star className='starTile' />
					<span className='stargazers_countTile'>{stargazers_count}</span>
				</div>
			</div>
			<label htmlFor={id} className='postDescriptionTile'>
				<h2 className="titlePostTile">
					{title}
				</h2>
				<span className='textPostTile'>
					{text}
				</span>
				<div className="tagsTile">
					<Tag />
					<Tag tag={tag} />
				</div>
			</label>
			<Button dataActivity={dataActivity} className="button buttonTile"/>
		</div>
	)

}

export default PostTile