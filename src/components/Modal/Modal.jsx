import "./modal.css"

function Modal({children, setShowModal}) {
    return (
        <div className ="modal-container">
            <p onClick = {() => setShowModal(false)} className= "modal-close">X</p>
           {children} 
        </div>
    )
}

export default Modal