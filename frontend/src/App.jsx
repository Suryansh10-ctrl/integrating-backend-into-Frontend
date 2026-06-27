import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function fetchNotes(){
    axios
      .get("http://localhost:3000/api/notes")
      .then(res => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
  }

  useEffect(() => {
    fetchNotes();
  }, []);

  function handleSubmit(e){
    e.preventDefault();
    const {title,desc} = e.target.elements;
    console.log(title.value,desc.value);

    axios.post("https://integrating-backend-into-frontend.onrender.com/api/notes",{
      title:title.value,
      desc:desc.value
    })
    .then(res => {
      console.log(res.data);
      fetchNotes();
    })
  }

  function handleDelete(id){
    console.log(id);
    axios.delete("https://integrating-backend-into-frontend.onrender.com/api/notes/"+id)
    .then((res) => {
      console.log(res.data);
      fetchNotes();
    })
  }

  function handleUpdate(id) {
  const newTitle = prompt("Enter new title:");
  const newDesc = prompt("Enter new description:");

  axios.patch("https://integrating-backend-into-frontend.onrender.com/api/notes/" + id, {
    title: newTitle,
    desc: newDesc,
  })
  .then((res) => {
    console.log(res.data);
    fetchNotes();
  });
}

  return (
    <>
      <form className="note-created-form" onSubmit={handleSubmit}>
        <input name="title" type="text" placeholder="Enter Title: " />
        <input name="desc" type="text" placeholder="Enter Description: "/>
        <button>Create Note</button>
      </form>

      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.desc}</p>
            <button onClick={() => {handleDelete(note._id)}}>Delete</button>
            <button onClick={() => {handleUpdate(note._id)}}>Update</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
