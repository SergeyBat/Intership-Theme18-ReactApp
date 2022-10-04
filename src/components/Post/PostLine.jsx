import Input from '../Input/Input'
import './PostLine.scss'
import { Tag } from '../Tag/Tag'
import Star from './Star'

const PostLine = ({ item, dataActivity = false, changeMyList, ...props } = props) => {
	return (
		<div className="postLine">
			<Input dataActivity={item.dataActivity} onChange={changeMyList} type="checkbox" id={item.id} className="checkboxPostLine" />
			<label htmlFor={item.id} className='checker'>
				<span className='check'></span>
			</label>
			<div className='postDescriptionLine'>

				<h2 className="titlePostLine">
					{item.name}
				</h2>

				<span className='textPostLine'>
					{item.description}
				</span>
				<div className="tagsLine">
					{item.topics.map((e, index) => (
						<Tag key={index+e} tag={e} />
					))}

				</div>
			</div>
			<div className="additionalInformationLine">
				<div className="ratingLine">
					<Star className='starLine' />
					<span className='stargazers_countLine'>{item.stargazers_count}</span>
				</div>
				<span className="languageLine">
					{item.language}
				</span>
			</div>
		</div>
	)

}

export default PostLine