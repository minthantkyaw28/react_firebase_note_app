
import { useState,useEffect } from 'react';
import './App.css';
import AddNote from './components/AddNote';
import Navbar from './components/Navbar';
import Note from './components/Note';
import Intro from './components/Intro';

function App() {

  const[notes,setNotes]=useState([]);
  const[loading,setLoading]=useState(false);
  const[error,setError]=useState(null);

  useEffect(() => {
    getNotes();
  }, []);


  const getNotes=async ()=>{

    setLoading(true);

    try {
      
       const response=await fetch("https://firenote-866b0-default-rtdb.firebaseio.com/notes.json");
    
      //console.log(data);
      if(!response.ok){
        throw new Error("Cannot connect to firebase");
      }

      const notes=await response.json();
      const modifiedNote=[];

      for(const key in notes){
        modifiedNote.push({
          id:key,
          note:notes[key],
        });
      }

      //console.log(modifiedNote);
      setNotes(modifiedNote);

    } catch (error) {
      setError(error.message)
    }
    setLoading(false);
  }

  return (
    <div className="App">
      <Navbar totalNotes={notes.length}></Navbar>
      {loading && !error && <p className='message'>Getting notes.</p>}
      {error && !loading && <p className='message error'>{error}</p>}
      {
        notes.length === 0 && <Intro></Intro>
      }
      {
       !loading && !error && (
        <>
          <AddNote getNotes={getNotes}></AddNote>
          {
            notes.map((note,index)=>
          
                <Note key={index} note={note} getNotes={getNotes}></Note>
              
            )
          }
        </>
       )
      }
     
    </div>
  );
}

export default App;
