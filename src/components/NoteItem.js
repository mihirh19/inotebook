import React,{useContext}from 'react'
import  noteContext from '../context/notes/NoteContext';

const NoteItem = (props) => {
  const context = useContext(noteContext);
  const {deleteNote} = context;
   const {note, updateNote} = props;
  return (
    <div className='col-md-3'>
      <div className="card my-4">
    <div className="card-body">
      <h5 className="card-title">{note.title}</h5>
      <span className="badge text-bg-primary text-dark">{note.tag}</span>
      <p className="card-text">{note.description}</p>
      <i className="fa-solid fa-trash-can mx-2" onClick={()=>{deleteNote(note._id)}}></i>
      <i className="fa-solid fa-file-pen mx-3" onClick={( )=>{updateNote(note)}}></i>
    </div>
  </div>
  </div>
  )
}

export default NoteItem