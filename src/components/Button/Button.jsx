import './Button.scss'

const Button = ({ textButton = 'Add to List', dataActivity, className, onClick, id, ...props } = props) => {
	if (dataActivity === "true") {
		textButton = "REMOVE FROM LIST"
	}
	return (
		<button className={className} data-activity={dataActivity} onClick={e => onClick(e, id)}>
			{textButton}
		</button>
	)
}

export default Button;