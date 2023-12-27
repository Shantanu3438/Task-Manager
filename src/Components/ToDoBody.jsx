import { useState } from "react"

export default function ToDoBody() {

    const [uncheckedItems, setUncheckedItems] = useState([])
    const [checkedItems, setCheckedItems] = useState([{title:'Go for shopping', id:'3', isChecked:'true'}])
    const [newItemText, setNewItemText] = useState('')

    const handleInputText = (event) =>{
        setNewItemText(event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key == "Enter" && newItemText.trim() !== "") {
            const newItem = {
                title: newItemText,
                id: Date.now().toString(),
            }
            setUncheckedItems([...uncheckedItems, newItem])
            setNewItemText('')
        }
    }
    
    function handleInputChange(event) {
        console.log(event.target.id)
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
                    onChange={handleInputText}
                    ></input>
                </div>
                <div className="ToDoBody--items">
                {uncheckedItems.map(item => (
                    <ToDoItem key={item.id} title={item.title} id={item.id} handleInput={handleInputChange}/>
                    ))}

                {
                checkedItems.map(item => (
                    <ToDoItem key={item.id} title={item.title} id={item.id} isChecked={true} handleInput={handleInputChange}/>
                ))}
                </div>
            </div>
        </div>
        )
}

function ToDoItem(props) {
    return (
        <div>
            <input 
            type="checkbox" 
            id={props.id} 
            checked={props.isChecked}
            onChange={props.handleInput}
            ></input>
            <label style={props.isChecked ? {textDecoration:'line-through'}: {}} for={props.id}>{props.title}</label>
        </div>
    )
}