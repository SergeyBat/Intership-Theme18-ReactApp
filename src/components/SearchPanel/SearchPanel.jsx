import React from 'react';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

import './SearchPanel.scss'
import getRepositories from '../../services/getRepositories'


export default class SearchPanel extends React.Component {
	constructor(props){
		super(props)
	}

	onChange = (name, value) => {
		this.setState({
			[name]: value
		})
	}

	serchOnGitHub = async (e) => {
		e.preventDefault()
		const url = 'https://api.github.com/search'
		let type = this.state.Type
		let textRequest = this.state.textRequest
		let language;
		if (this.state.Type) {
			type = this.state.Type
		} else {
			type = 'repositories'
		}
		if (this.state.language) {
			language = `+language:${this.state.language}`;
		} else {
			language = ''
		}
		const response = await getRepositories(url, type, textRequest, language);

		this.props.setResponseSearch(response)
	}


	render() {
		return (
			<form className='search' id='formSearch' onClick={this.getData} onSubmit={e => this.serchOnGitHub(e)}>
				<Select name='Type' defaultValue='Type' onChange={this.onChange} />
				<Select name='language' defaultValue='Language' onChange={this.onChange} />
				<Input type='text' className='inputText' placeholder='Type here for search' onChange={this.onChange} name="textRequest" />
				<Input type='submit' className='inputSubmit' valueInput="Search" name="inputSubmit" />

			</form>
		);
	}
}