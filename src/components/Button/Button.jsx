import './Button.scss'

const Button = ({ textButton='Add to List', dataActivity=false, className, ...props}=props) => {
	if (dataActivity){
		textButton = "REMOVE FROM LIST"
	}
	return(
		<button className={className} data-activity={dataActivity}>
			{textButton}
		</button>
	)
}

export default Button;