import React from 'react'

import noteContext from './NoteContext'
import { useState } from 'react'

const NoteState = (props)=>{
  const auth = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjJmY2EzZDhlYjgyNzI5OTVlOWViYjEyIn0sImlhdCI6MTY2MDcyNDE5Nn0.ggiBcU4stHcnbDZkp5NqkLjP1gBFbfQcBLYgeJuC5N4"
  const host = "http://localhost:5000";
   
   const notein = []
    
    const [notes, setNotes] = useState(notein)
    
    const getNotes =async ()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : auth
        }
        
      });
      const json = await response.json();
      setNotes(json)
    }
 
    
    
    
    
    
    
    
    
    
    
    //add a note
    
    const addNote =async (title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : auth
        },
        body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
      });
      
     const note = await response.json(); 
      
      // const note2  ={
      //   "_id": "62fb72bfa2kdffjn3f5c21ad585b06",
      //   "user": "62fb728aa2f3f5c21ad585ab",
      //   "title": title,
      //   "description": description,
      //   "tag": tag,
      //   "date": "2022-08-16T10:34:39.992Z",
      //   "__v": 0
      // };
      setNotes(notes.concat(note))
    }
 
    
    //delete note
  
    const deleteNote  = async (id)=>{
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : auth
        }
        
      });
      
      const no = await response.json();
      
      
      const newNote = notes.filter((note)=>{return note._id!==no.note._id})
      
      setNotes(newNote)
      
    }
    
    //edit note
    
    const editNote = async (id, title, description, tag)=>{
      const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'auth-token' : auth
        },
        body: JSON.stringify({title, description, tag}) // body data type must match "Content-Type" header
      });
      
      const json = await response.json();
      
      let newNotes = JSON.parse(JSON.stringify(notes));
      
      
      
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === json.note._id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag; 
          break; 
        }
      }  
      setNotes(newNotes);
    }

   return (
      <noteContext.Provider value={{notes, setNotes, addNote, deleteNote, editNote, getNotes}}>
         {props.children}
      </noteContext.Provider>
   )
}

export default NoteState;