import React, { useState } from 'react'

const AddNote = ({getNotes}) => {

    const[note,setNote]=useState("");
   

    const addNote=async (e)=>{

    e.preventDefault();

    if(note.trim().length===0){
        alert("Enter valid note");
    }
    else{
           try{
         await fetch("https://firenote-866b0-default-rtdb.firebaseio.com/notes.json",{
            method:"POST",
            body:JSON.stringify(note),
            headers:{
                "Content-Type":"application/json"
            }
        });
        
        setNote("");
        getNotes();
    }catch(error){
        alert("Smth wrong... try again!")
    }
    }
}

  return (
    <section>
        <form className='card' onSubmit={addNote}>
            <input type="text" 
            placeholder='Add Note Here' 
            value={note} 
            onChange={(e)=>setNote(e.target.value)}/>
            <button className='submit-btn'>Add Note</button>
        </form>
    </section>
  )
}


export default AddNote
