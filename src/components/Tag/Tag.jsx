import React from 'react';
import './Tag.scss'


export const Tag = ({tag="JavaScript"}) => {
	return(
		<div className='tag'>
			{tag}
		</div>
	)
}

