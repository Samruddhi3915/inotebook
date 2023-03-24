import NoteContext from "./noteContext";
import { useState } from "react";
const NoteState = (props) => {
  const host = "http://localhost:5001";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  //getallnotes
  const getNotes = async () => {
    //todo api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNTdjYjhmZTc1NzhhYzU3MWVlNzdlIn0sImlhdCI6MTY3OTEzMTQzNX0.fz0-pMOQxXvWrB30Y8ke3DuDewMMZ9kb52BNsNXT_9c",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  //add a note
  const addNote = async (title, description, tag) => {
    //todo api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNTdjYjhmZTc1NzhhYzU3MWVlNzdlIn0sImlhdCI6MTY3OTEzMTQzNX0.fz0-pMOQxXvWrB30Y8ke3DuDewMMZ9kb52BNsNXT_9c",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  };
  //delete a note

  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNTdjYjhmZTc1NzhhYzU3MWVlNzdlIn0sImlhdCI6MTY3OTEzMTQzNX0.fz0-pMOQxXvWrB30Y8ke3DuDewMMZ9kb52BNsNXT_9c",
      },
    });
    const json = await response.json();
    console.log(json);
    // console.log("Deleteing the note with id" + id);

    //will keep only the elements which id does not matches the id to be deleted
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  //edit a note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQxNTdjYjhmZTc1NzhhYzU3MWVlNzdlIn0sImlhdCI6MTY3OTEzMTQzNX0.fz0-pMOQxXvWrB30Y8ke3DuDewMMZ9kb52BNsNXT_9c",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    console.log(newNotes);
    setNotes(newNotes);
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
