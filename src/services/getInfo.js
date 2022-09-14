function getInfo(url){
  return(
    fetch(url)
    .then(res => res.json())
    .then(jsonResponse => {
      const {results} = jsonResponse
      const res = results.map(result => {
        const {id,name, image} = result
        return({id,name,image})
      })  
      return(res)  
    })
  );
}

export default getInfo;