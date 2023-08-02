import React from 'react'
import DeleteIcon from '../svgs/DeleteIcon'

const Note = ({note,setNotes,getNotes}) => {

  //destructor note object
  const {note:text,id}=note;

  //delete note using id
  const deleteNote=async ()=>{
  
    try {
      
      const response=await fetch(`https://firenote-866b0-default-rtdb.firebaseio.com/notes/${id}.json`,{
        method:"DELETE"
      });

      if(!response.ok){
        throw new Error("Failed to delete note!");
      }

      getNotes();

    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <div className='card card-ctr'>
      <h3>{text}</h3>
      <div onClick={deleteNote}>
        <DeleteIcon></DeleteIcon>
      </div>
    </div>
  )
}

export default Note
