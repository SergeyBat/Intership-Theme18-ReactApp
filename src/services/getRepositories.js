const getRepositories = async (url, type, textRequest, language='')=>{
	const res = await fetch(`${url}/${type}?q=${textRequest}${language}`)
		.then(response => response.json())
		.then(data => {
			return (data.items);
		})
		.catch(error => console.error(error))
	return res;
}

export default getRepositories