import './Select.scss'
import React, { useState } from 'react';

const Select = ({ defaultValue = '', name, onChange, ...props } = props) => {
	/* 	let [value, setValue] = useState();
		const selectChange = (e) => {
			setValue(value = e.target.value);
			console.log(value)
		}
	 */
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
		<select  name={name} id="" className='select' onChange={(e) => onChange(name, e.target.value)} >
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