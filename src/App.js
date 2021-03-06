import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import Details from './containers/details';

function App() {
  return (
    <Routes>
      <Route path='/' index element={<Home />} />
      <Route path='/movie-list/:id' element={<Details />} />
    </Routes>
  );
}

export default App;
