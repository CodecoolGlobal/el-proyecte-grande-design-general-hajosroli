import './App.css';
import { Route, Routes } from 'react-router-dom';
import AuthenticationPage from './pages/AuthenticationPage';
import MainLayout from './outlet/MainLayout';
import HomePage from './pages/HomePage';
import AuthLayout from './outlet/AuthLayout';
import ProtectedPage from './pages/ProtectedPage';

function App() {
  return (
      <Routes>
        <Route path='/authentication' element={<AuthenticationPage />} />
        <Route element={<MainLayout />}>
          <Route index path='/' element={<HomePage />} />
          <Route element={<AuthLayout />}>
            <Route path='/protected' element={<ProtectedPage />}/>
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
