import './Input.scss'

const Input = ({ onChange, name, ...props } = props) => {
	let value;
	if (props.valueInput) {
		value = props.valueInput
	};
	return (
		<input
			name={name}
			type={props.type}
			className={props.className}
			placeholder={props.placeholder ? props.placeholder : ''}
			value={value}
			id={props.id}
			onChange={(e) => onChange(name, e.target.value)}
		/>
	)
}

export default Input;