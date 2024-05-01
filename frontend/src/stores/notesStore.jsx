import { create } from "zustand";
import axios from "axios";
import { decrypt,encrypt } from "../components/EncryptionAndDecription";

let notesStore = create((set) => ({
  notes: null,

    createForm: {
    title: "",
    body: "",
  },
  updateForm: {
    _id: null,
    title: "",
    body: "",
  },

  logoutremove:()=>{
    set({notes:null})
  },

  fetchNotes: async () => {
    const res = await axios.get("/notes");
    console.log(res);
    //set in the store
    set({ notes: res.data.notes });
  },

  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();
    //create password
    let res = null;

    const {createForm, notes} = notesStore.getState();

    if (createForm.body.length != 0 && createForm.title.length != 0) {
      let {body,title}=createForm;

      body=encrypt(body)
      title=encrypt(title)
     //updating the value of form field
      createForm.title=title
      createForm.body=body
      
     
      res = await axios.post("/notes",createForm);

      set({ notes: [...notes, res.data.note] ,
        createForm:{ title:"", body:"" }});
      
    } else {
      console.log("Please enter your data");
    }
    console.log(res);
  },

  deleteNode: async (_id) => {
    const res = await axios.delete(`/notes/${_id}`);
    const { notes } = notesStore.getState();

    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    }); //filtering the passwords from the notes
    set({ notes: newNotes });
  },

  handleUpdateFieldChange: async (e) => {
    let { value, name } = e.target;
 
    e.preventDefault();
    set((state) => {
      return {
        updateForm: {
          ...state.updateForm,
          [name]: value,
        },
      };
    });
  },

  toggleUpdate: async ({ _id, title, body }) => {
    //set our state to the update form
    title=decrypt(decrypt(title))
    body=decrypt(decrypt(body))

    
    set({
      updateForm: {
        title,
        body,
        _id,
      },
    });
  },

  updateNote: async (e) => {
    e.preventDefault();
    let {updateForm:{ title, body, _id },notes,} = notesStore.getState();

    title=encrypt(title)
    body=encrypt(body)
      
    const res = await axios.put(`/notes/${_id}`,{
      title,
      body,
    });
    //state update
    const newNotes = [...notes];

    const noteIndex = notes.findIndex((note) => {
      return note._id === _id;
    });
    newNotes[noteIndex] = res.data.note;

    set({
      notes: newNotes,
      updateForm: {
        _id: null,
        title: "",
        body: "",
      },
    });
    
  },
}));

export default notesStore;
