import Input from '../Input/Input'
import './PostLine.scss'
import { Tag } from '../Tag/Tag'
import Star from './Star'

const PostLine = ({ id = 0, title = "TruyGhost/Ghost", text = 'The platform for professional publishers', tag = "cms", stargazers_count = "25k", language = "JavaScript", ...props } = props) => {
	return (
		<div className="postLine">
			<Input type="checkbox" id={id} className="checkboxPostLine" />
			<label htmlFor={id} className='checker'>
				<span className='check'></span>
			</label>
			<div htmlFor={id} className='postDescriptionLine'>

				<h2 className="titlePostLine">
					{title}
				</h2>

				<span className='textPostLine'>
					{text}
				</span>
				<div className="tagsLine">
					<Tag />
					<Tag tag={tag} />
				</div>
			</div>
			<div className="additionalInformationLine">
				<div className="ratingLine">
					<Star className='starLine' />
					<span className='stargazers_countLine'>{stargazers_count}</span>
				</div>
				<span className="languageLine">
					{language}
				</span>
			</div>
		</div>
	)

}

export default PostLine