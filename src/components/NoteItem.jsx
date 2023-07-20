import React, { useContext } from 'react';
import noteContext from '../context/notes/notescontext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const {note} = props;

  return (
    <div className="col-md-4 my-2">
      <div className="card-body bg-dark text-light" style={{border : '2px solid black'}}>
        <div className="d-flex justify-content-between">
          <h5 className="card-title">{note.title}</h5>
          <div>
            <span onClick={() => {deleteNote(note._id); props.showAlert("Deleted Successfully","success")}} ><i className='fa fa-trash mx-2' style={{ cursor: 'pointer' }}></i></span> 
            <span><i className='fa fa-edit mx-2' style={{ cursor: 'pointer' }}></i></span>
          </div>
        </div>
        <p className="card-text">{note.description}</p>
      </div>
    </div>
  );
};

export default NoteItem;
