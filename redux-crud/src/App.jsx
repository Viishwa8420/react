import { BrowserRouter, Routes, Route } from  'react-router-dom';
import Counter from './Pages/Counter';
// import View from  './Pages/View';
// import Add from  './Pages/Add';

function App() {


  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Counter/>}/> 
      {/* <Route path="/crud" element={<View/>}/> 
      <Route path="/add" element={<Add/>}/>  */}
     </Routes>
    </BrowserRouter>
  )
}

export default App
