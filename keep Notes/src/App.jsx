import React from 'react';
import AddNote from './components/AddNote';
import ViewNotes from './components/ViewNotes';

const App = () => {
  return (
    <div className="App">
      <h1 style={{ height:"80px",backgroundColor:"yellowgreen",color:"white",textAlign:"center",lineHeight:"80px"}}>Keep Notes</h1>
      <AddNote />
      <ViewNotes />
      <h5 style={{ height:"20px",backgroundColor:"yellowgreen",color:"white",lineHeight:"20px",textAlign:"center",marginTop:"360px"}}>copyrights 2024</h5>
    </div>
  );
};

export default App;
