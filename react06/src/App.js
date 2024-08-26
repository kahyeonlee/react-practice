import {Routes,Route} from 'react-router-dom'
import './App.css';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

function App() {

  // Routes
  return (
    
    <div>
      <Routes>
        <Route  path='/' element={<HomePage/>}/>
        <Route  path='/about' element={<AboutPage/>}/>
        <Route  path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
