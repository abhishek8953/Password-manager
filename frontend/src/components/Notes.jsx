import notesStore from "../stores/notesStore";
import Note from "./Note";


export default function Notes() {
  const store = notesStore();
  return (
    <div>
      <h2>Password</h2>
      <br />
      {store.notes && //script for itterating the password
        store.notes.map((note) => {
           
          return (
          <Note note={note} key={note._id} /> //props sending
  
          );
        })}
    </div>
  );
}
