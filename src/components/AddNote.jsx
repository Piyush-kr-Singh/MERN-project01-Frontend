import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/notescontext';
import { Link } from 'react-router-dom'

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tags: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tags);
    setNote({title: "", description: "", tags: ''});
    props.showAlert("Note Added Sucessfully", "success");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className='container bg-dark text-light my-5'>
        <h1>Add a Note</h1>
        <form>
          <div className='mb-3 my-3'>
            <label htmlFor='title' className='form-label' >
              Title
            </label>
            <input type='text' className='form-control bg-dark text-light' id='title' name='title' placeholder='Type the Title (Minimum 3 characters)' aria-describedby='emailHelp' value={note.title} onChange={onChange} minLength={3} required  />
          </div>
          <div className='mb-3'>
            <label htmlFor='description' className='form-label'>
              Description
            </label>
            <input type='text' className='form-control bg-dark text-light' id='description' name='description' placeholder='Type the Description (Minimum 5 characters)' value={note.description} onChange={onChange} minLength={5} required  />
          </div>
          <div className='mb-3'>
            <label htmlFor='tags' className='form-label'>
              Tags
            </label>
            <input type='text' className='form-control bg-dark text-light' id='tags' name='tags' placeholder='Type the Tags (Optional)' value={note.tags} onChange={onChange} minLength={3} required />
          </div>
          <a href="#"><button disabled={note.title.length <3 || note.description.length<5} type='submit' className='btn btn-primary mb-3' onClick={handleClick}>
            
            Add Note
          </button></a>
        </form>
      </div>
    </div>
  );
};

export default AddNote;  
