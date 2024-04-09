import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Main from './view/Main'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
