import React from 'react';
import Select from '../../components/Select/Select';
import Input from '../../components/Input/Input';

import './SearchPanel.scss'
import getRepositories from '../../services/getRepositories'


export default class SearchPanel extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			Type: 'Type',
			language: 'Language',
			textRequest: ''
		}

	}

	onChange = ({ target: { name, value } }) => {
		this.setState({
			[name]: value
		})
	}

	serchOnGitHub = async (e) => {
		e.preventDefault()
		const url = 'https://api.github.com/search'
		let type;
		let textRequest;
		let language;
		if (this.state.Type != 'Type') {
			type = this.state.Type
		} else {
			type = ''
		}
		if (this.state.language != 'Language') {
			language = `+language:${this.state.language}`;
		} else {
			language = ''
		}
		if (this.state.textRequest) {
			textRequest = this.state.textRequest;
		} else {
			textRequest = ''
		}
		const response = await getRepositories(url, type, textRequest, language);
		response.map(e => {
			if (this.props.myList.find(el => {
				if (el.id === e.id){
					return true
				}
			})) {
				e.dataActivity = 'true'
			} else {
				e.dataActivity = 'false'
			}
		})
		this.props.setResponseSearch(response)
	}

	checkInputData = () => {
		if (this.state.Type != 'Type' && this.state.textRequest == '') {
			return true
		}

		if (this.state.Type == 'Type' && this.state.textRequest == '' && this.state.language != 'Language') {
			return true
		}

		if (this.state.Type == 'Type') {
			return true
		}
		return false;
	}

	render() {
		return (
			<form className='search' id='formSearch' onClick={this.getData} onSubmit={e => this.serchOnGitHub(e)}>
				<Select name='Type' defaultValue='Type' onChange={this.onChange} />
				<Select name='language' defaultValue='Language' onChange={this.onChange} />
				<Input type='text' className='inputText' placeholder='Type here for search' onChange={this.onChange} name="textRequest" />
				<Input type='submit' className='inputSubmit' valueInput="Search" name="inputSubmit" stateButton={this.checkInputData()} />

			</form>
		);
	}
}