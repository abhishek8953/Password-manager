import notesStore from "../stores/notesStore"



export default function DeleteModal(){

    const store = notesStore((store) => {
        return {
          
          deleteNode: store.deleteNode,
        };
      });

    return(
        <>
        <div className="modal-wrapper">
            <div className="modal-container">
                <p>are you sure</p>
                <button>Yes</button>
                <button>No</button>
            </div>
        </div>

        </>
    )
}