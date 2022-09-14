import '../styles/Card.css'

function Card({name, image}){
  return(
    <div className='card-container'>
      <h1>{name}</h1>
      <img className='img' src={image} />
    </div>
    
  );
}

export default Card;