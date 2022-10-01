import './Tag.scss'


export const Tag = ({tag="JavaScript", ...props}) => {
	return(
		<div className='tag'>
			{tag}
		</div>
	)
}

