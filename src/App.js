import './App.css';

import { useState, useEffect } from 'react';

import Characters from './components/Characters';

function App() {
  const [caracterList, setCaracterList] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => response.json())
      .then((response) => setCaracterList(response.results))
      .catch((err) => console.log(err));
  }, [page]);

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <Characters personagens={caracterList} />
        <button onClick={previousPage}>Próxima Página</button>
        <button onClick={() => setPage(page + 1)}>Página Anterior</button>
      </header>
    </div>
  );
}

export default App;
