import './App.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { MainPage } from './pages/MainPage';
import { ScrollHandler } from './components/ScrollHandler';







function App() {
  return (
    
      <BrowserRouter>
        <ScrollHandler>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='*' element={<h1> ERROR 404 </h1>} />
        </Routes>
        </ScrollHandler>
    </BrowserRouter>
   
  
  );
}

export default App;
