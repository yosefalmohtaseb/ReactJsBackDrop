import { useState } from "react";
import Modal from "./Modal";
import BackDrop from "./BackDrop";

function Todo(props) {
    const [isOpen, setIsOpen] = useState(false)
    const [card, setCard] = useState({})
    function deleteHandeler(){
        setIsOpen(true)
    }
    function closeHandeler(){
        setIsOpen(false)
    }
  return (
    <div className="card">
      <h2>{props.titel}</h2>
      <div className="action">
        <button className="btn" onClick={deleteHandeler}>Delete</button>
      </div>
      {/* //{isOpen ? <Modal/> :null} */}
      {isOpen && <Modal onCancel={closeHandeler} onConfirm={closeHandeler}/>} 
      {isOpen && <BackDrop onClick={closeHandeler}/>}
    </div>
  );
}
export default Todo;
