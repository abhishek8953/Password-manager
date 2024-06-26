import { useEffect } from "react";
import CreateForm from "../components/CreateForm";
import Notes from "../components/Notes";
import UpdateForm from "../components/UpdateForm";
import notesStore from "../stores/notesStore";

export default function NotesPage(){
    
    const store = notesStore()
    //api calling
    useEffect(() => {
      store.fetchNotes();
    }, []);
  

    return(
        <div className="all-crud">
      
       <UpdateForm/>
       <CreateForm/>
       <Notes />
        </div>
    )
}