import notesStore from "../stores/notesStore"
import {useNavigate} from 'react-router-dom'



export default function(){

    const store=notesStore();
    const navigate=useNavigate();

    if(store.updateForm._id) return <></>

    return(
        
            <div>
              <h2>Create Password</h2>
              <form  className="input-1" onSubmit={store.createNote}>
                <input 
                
                  onChange={store.updateCreateFormField}
                  value={store.createForm.title}
                  placeholder="Enter name"
                  name="title"
                  
                />
                <input
                  onChange={store.updateCreateFormField}
                  value={store.createForm.body}
                  placeholder="Enter Password"
                  name="body"
                  className="create-input"
                />
    
                <button className="logout-btn hover" type="submit">Submit</button>

                <button className="logout-btn hover" type="button" onClick={(e)=>{
                  e.preventDefault();
                  navigate('/logout')
                }}
                >Logout </button>
              </form>
            
            </div>
         
    )
}