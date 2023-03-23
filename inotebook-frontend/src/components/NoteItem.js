import React from "react";

const NoteItem = (props) => {
  const { note } = props;
  return (
    <>
      <div className="col-md-4 ">
        <div className="card my-3">
          <div className="card-body">
            <div className="d-flex align-items-center">
              <h5 className=" card-title">{note.title}</h5>

              {/* <a href="/#" className="btn btn-primary">
            Go somewhere
          </a> */}
              {/* <span className="my-2 "> */}
              <i className="fa-solid fa-trash-can mx-2"></i>
              <i className="fa-solid fa-pen-to-square mx-2"></i>
              {/* </span> */}
            </div>
            <p className="card-text">{note.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
