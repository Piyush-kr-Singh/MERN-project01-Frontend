import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/notescontext';
import NoteItem from './NoteItem';
import AddNote from './AddNote';
import { useNavigate } from 'react-router-dom';

const Notes = (props) => {
  const context = useContext(noteContext);
  let navigate = useNavigate();
  const { notes, getNotes } =context;
  useEffect(()=>
  {
    if(localStorage.getItem('token'))
    {
      getNotes()
    }
    else
    {
      navigate("/login");
    }

    // getNotes()
    
  }, [])
  return (
    <>
        <AddNote showAlert={props.showAlert}/>
        <div className='row my-3 text-light'>
        <h1>Your Notes</h1>
        <div className="container mx-1">
        {notes.length===0 && 'No Notes to Display'}
        </div>
        {/* {console.log(notes)} */}
        {notes.map((note)=>
        {
          return <NoteItem showAlert={props.showAlert}  key={note._id} note={note}/>
        })}
        </div>
    </>
  )
}

export default Notes
