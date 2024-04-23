import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main/Main.jsx'
import Recipe from './view/Recipe/Recipe.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/Recipe" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
