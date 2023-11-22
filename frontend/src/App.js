import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';

function App() {
  return (
      <Routes>
        <Route path='/authentication' element={<AuthenticationPage/>} />
      </Routes>
  );
}

export default App;
