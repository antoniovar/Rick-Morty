import { useEffect, useState } from 'react';
import getInfo from './services/getInfo.js';
import CardList from './components/CardList.jsx';
import NavBar from './components/NavBar.jsx';
import './App.css';

function App() {
  const [page, setPage] = useState(1)
  const [values, setValues] = useState([]);
  useEffect(()=>{
    getInfo(`https://rickandmortyapi.com/api/character?page=${page}`)
    .then(val => setValues(val))
  }, [page])

  const nextPag = () => {
    let pag = page
    pag = pag +1
    setPage(pag)
  }
  const previousPag = () => {
    let pag = page
    pag = pag -1
    setPage(pag)
  }

  return (
    <div className="App">
      <h1 className='pageNumber'>Page {page}</h1>
      <NavBar nextPage={nextPag} previousPage={previousPag} page={page}/>
      <CardList cardsArray={values} />
    </div>
  );
}

export default App;
