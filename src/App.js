

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';

function App() {

  

  
    // function tweet(e){
    //   return(
    //     setpageno(e)
    //   )
      
    // }
    




  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Main />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
