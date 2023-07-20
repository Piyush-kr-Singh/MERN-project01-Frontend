import React from 'react';
import NoteContext from './notescontext';
import { useState ,useEffect } from 'react';

const NoteState = (props) => {
  const host = "http://localhost:5000"
  const notesInitial = []
  const [notes, setNotes] = useState(notesInitial)

  useEffect(() => {
    getNotes();
  }, []);

  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallNotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMzhkZDJiMzhlYTBiNTZlZmZiMDk2In0sImlhdCI6MTY4OTQ5MjEwNX0.C6HViqyjzc01ZIXo4LXQtBUDMDc4C8LW2YYmGQUB-CM"
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    setNotes(json)
  }

  

  // Add a Note
  const addNote = async (title, description, tags) => {
    // API Call 
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMzhkZDJiMzhlYTBiNTZlZmZiMDk2In0sImlhdCI6MTY4OTQ5MjEwNX0.C6HViqyjzc01ZIXo4LXQtBUDMDc4C8LW2YYmGQUB-CM"
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tags})
    });

    console.log("Adding a new note")
    const note = await response.json();
    setNotes(notes.concat(note));
    // const note =
    //   {
    //     "user": "64b38dd2b38ea0b56effb096",
    //     "title": title,
    //     "description": description,
    //     "tags": tags,
    //     "_id": "64b6d78f3d621950af79c6fb",
    //     "date": "2023-07-18T18:18:55.616Z",
    //     "__v": 0
    //   }  
  }


  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRiMzhkZDJiMzhlYTBiNTZlZmZiMDk2In0sImlhdCI6MTY4OTQ5MjEwNX0.C6HViqyjzc01ZIXo4LXQtBUDMDc4C8LW2YYmGQUB-CM"
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();

    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => { return note._id !== id })
    setNotes(newNotes)
  }

  // Edit a Note
   const editNote = async(id,title,description,tags)=>
  {
     // API Call 
     const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tags})
    });

    const json = await response.json();

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tags = tags;
      }
    }  
  }

  return (
    <>
    {/* {console.log("Array of notes" + notes)} */}
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
    </>
  );
};

export default NoteState
