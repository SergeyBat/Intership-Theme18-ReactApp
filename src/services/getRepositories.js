const getRepositories = async ({url, type, textRequest, language}) => {
  console.log(`${url}/${type}${textRequest}${language}`)
  return await fetch(`${url}/${type}?q=${textRequest}${language}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.items)
      return (data.items);
    })
    .catch(error => {
      console.log(error)
    })

}

export default getRepositories