import '../styles/CardList.css'
import Card from './Card.jsx';

function CardList({cardsArray}){
  return(
    <div className='cardList-container'>
      {cardsArray.map(val => <Card key={val.id} name={val.name} image={val.image} />)}
    </div>
  );
}

export default CardList;