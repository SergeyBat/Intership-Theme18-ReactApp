import React from 'react';
import './Select.scss'

const Select = ({ defaultValue = '', name, onChange, ...props } = props) => {

	const checkedType = (defaultValue) => {
		let options = [];
		if (defaultValue === 'Language') {
			options = ["Javascript", "css", "html", "php", "ruby", "c++", "python", "c#", "java", "go", "haskel"]
		} else if (defaultValue === 'Type') {
			options = ['repositories'];
		}
		return options;
	}

	return (
		<select  name={name} id="" className='select' onChange={onChange} >
			<option defaultValue={defaultValue}>{defaultValue}</option>
			{
				checkedType(defaultValue).map(e => (
					<option key={e} value={e}>{e}</option>
				))

			}

		</select >
	)
}

export default Select;