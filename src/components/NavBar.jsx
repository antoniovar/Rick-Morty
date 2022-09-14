import '../styles/NavBar.css'

function NavBar(props){
  return(
    <div className='NavBar-container'>
      <div className='left-container'>
        <h1>Rick & Morty</h1>
      </div>
      <div className='right-container'>
        {props.page>1?
          <button onClick={props.previousPage}>PREVIOUS</button>
          : null
        }
        <button onClick={props.nextPage}>NEXT</button>
      </div>
    </div>
  );
}

export default NavBar;