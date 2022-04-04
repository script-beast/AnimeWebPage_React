import './App.css';
import HomePage from './Components/HomePage';
import ShowPage from './Components/ShowPage';
import NotFound from './Components/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/show/:id' element={<ShowPage />}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}
export default App;
