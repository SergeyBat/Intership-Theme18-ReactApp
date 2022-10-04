import './Input.scss'

const Input = ({ onChange, name, dataActivity, stateButton, id, ...props } = props) => {
	let value;
	if (props.valueInput) {
		value = props.valueInput
	};
	let checked;
	if (dataActivity == "true") {
		checked = true;
	} else if (dataActivity == "false") {
		checked = false;
	}
	return (
		<input
			name={name}
			type={props.type}
			className={props.className}
			placeholder={props.placeholder ? props.placeholder : ''}
			value={value}
			id={id}
			data-activity={dataActivity}
			onChange={e=>onChange(e, id)}
			defaultChecked={checked}
			disabled={stateButton}
		/>

	)
}

export default Input;