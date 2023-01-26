import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './layouts/footer';
import Header from './layouts/header';
import AddTeacher from './pages/add';
import Detail from './pages/details';
import Home from './pages/home';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/add' element={<AddTeacher/>}/>
      <Route path='/details/:_id' element={<Detail/>}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
