import { useState } from "react"

export default function ToDoBody() {

    const [items, setItems] = useState([])
    const [newItemText, setNewItemText] = useState('')

    const handleInputChange = (event) =>{
        setNewItemText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key == "Enter" && newItemText.trim() !== "") {
            const newItem = {
                title: newItemText,
                id: Date.now().toString(),
            }
            setItems([...items, newItem])
            setNewItemText('')
        }
    } 

    return (
        <div className="ToDoBody">
            <div>
                <div className="ToDoBody--addItem">
                    <input type="checkbox"></input>
                    <input 
                    type="text" 
                    className="addItem--text" 
                    id="addItem" 
                    placeholder="Add a new To Do item"
                    value={newItemText}
                    onKeyDown={handleKeyDown}
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="ToDoBody--items">
                {items.map(item => (
                    <ToDoItem key={item.id} title={item.title} id={item.id} />
                ))}
                </div>
            </div>
        </div>
        )
}

function ToDoItem(props) {
    return (
        <div>
            <input type="checkbox" id={props.id}></input>
            <label for={props.id}>{props.title}</label>
        </div>
    )
}