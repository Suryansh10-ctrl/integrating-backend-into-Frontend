import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([
    {
      "title": "test title 1",
      "desc": "test desc 1"
    },
    {
      "title": "test title 2",
      "desc": "test desc 2"
    },
    {
      "title": "test title 3",
      "desc": "test desc 3"
    },
    {
      "title": "test title 4",
      "desc": "test desc 4"
    }
  ]);

  // useEffect(() => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        // console.log(res.data.notes);
        setNotes(res.data.notes);
      })
  // }, []);

  return (
    <>
      <div className="notes">
        {notes.map((note) => (
          <div className="note" key={note._id}>
            <h1>{note.title}</h1>
            <p>{note.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;