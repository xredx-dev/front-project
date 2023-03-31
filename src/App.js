import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import Home from './Pages/HomePage.jsx'
import Login from './Pages/LoginPage.jsx'
import Form from './Pages/FormPage.jsx'
import Result from './Pages/ResultPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<Form />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Result' element={<Result />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
