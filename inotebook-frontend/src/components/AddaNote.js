import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddaNote = () => {
  const context = useContext(noteContext);

  const { addNote } = context;
  const [note, setnote] = useState({
    title: "",
    description: "",
    tag: "",
  });
  const handleClick = (e) => {
    e.preventDefault();
    //dont reload the page
    addNote(note.title, note.description, note.tag);

    setnote({ title: "", description: "", tag: "" });
  };
  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="container my-3">
        <h2>Add a Note</h2>
        <form className="my-3">
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              minLength={5}
              value={note.title}
              required
              className="form-control"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              name="description"
              minLength={5}
              value={note.description}
              required
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              className="form-control"
              id="tag"
              name="tag"
              value={note.tag}
              minLength={5}
              required
              onChange={onChange}
            />
          </div>

          <button
            type="submit"
            disabled={note.title.length < 5 || note.description.length < 5}
            className="btn btn-primary"
            onClick={handleClick}
          >
            Add Note
          </button>
        </form>
      </div>
    </>
  );
};

export default AddaNote;
