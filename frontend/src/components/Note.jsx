import notesStore from "../stores/notesStore.jsx";
import  {decrypt} from './EncryptionAndDecription.jsx'
import { useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiShow } from "react-icons/bi";

export default function Note({ note }) {

  const [isDelete,setIsDelete]=useState(false);
  const [show,setShow]=useState("password");
 


  const store = notesStore((store) => {
    
    return {
      deleteNode: store.deleteNode,
      toggleUpdate: store.toggleUpdate,
    };
  });


  //main decription heare populate out data in to the web page

  return (
    //displaying notes on th front page
  <div className="main-passfield">
    <div className="del-update" key={note._id}>              
      <input className="input-field field" type="text" defaultValue={decrypt(decrypt(note.title))}/>
      <input  className="input-field field  ttt" type={show} defaultValue={decrypt(decrypt(note.body))} />  
    </div>
    <div className="del-update-btn">
   
    <button  className="btn" onClick={() =>{

    setShow((pre)=> {
      if(pre=="password"){
      return "text"}

      else{
        return "password"
      }
      })}}> <BiShow/> </button>


    <button className="btn" onClick={() => {
      let a=confirm("are you sure");
      if(a)store.deleteNode(note._id)}}>
        <MdDelete/>
      
    </button>

    <button  className="btn" onClick={() => 
      
      store.toggleUpdate(note)}> <MdEdit/> </button>

    

    
    </div>
  </div>
  );
}
