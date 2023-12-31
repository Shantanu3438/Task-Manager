import { useState } from "react"
import {BiSolidTrashAlt} from "react-icons/bi"

export default function ToDoBody() {

    const [uncheckedItems, setUncheckedItems] = useState([])
    const [checkedItems, setCheckedItems] = useState([])
    const [newItemText, setNewItemText] = useState('')
    const [isHovered, setIsHovered] = useState(false)

    const handleEnter = () => {
        setIsHovered(true)
    }
 
    const handleLeave = () => {
        setIsHovered(false)
    }

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
        const isChecked = event.target.checked
        const itemId = event.target.id
        if (isChecked) {
            const itemToCheck = uncheckedItems.find((item) => item.id == itemId)
            setCheckedItems((prevItems) => [...prevItems, itemToCheck])
            setUncheckedItems((prevItems) => prevItems.filter((item) => item.id != itemId))
        }
        else {
            const itemToUncheck = checkedItems.find((item) => item.id == itemId)
            setCheckedItems((prevItems) => prevItems.filter((item) => item.id != itemId))
            setUncheckedItems((prevItems) => [...prevItems, itemToUncheck])
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
                    onChange={handleInputText}
                    ></input>
                </div>
                <div className="ToDoBody--items">
                {uncheckedItems.map(item => (
                    <
                        ToDoItem 
                        key={item.id} 
                        title={item.title} 
                        id={item.id}
                        isHovered={isHovered}
                        handleEnter={handleEnter}
                        handleLeave={handleLeave}
                        handleInput={handleInputChange}
                    />
                    )).reverse()}

                {
                checkedItems.map(item => (
                    <
                        ToDoItem 
                        key={item.id} 
                        title={item.title} 
                        id={item.id}
                        isHovered={isHovered}
                        handleEnter={handleEnter}
                        handleLeave={handleLeave}
                        isChecked={true} 
                        handleInput={handleInputChange}
                    />
                )).reverse()}
                </div>
            </div>
        </div>
        )
}

function ToDoItem(props) {
    
    return (
        <div 
        className="todoItem"
        onMouseEnter={props.handleEnter}
        onMouseLeave={props.handleLeave}
        >
            <div>
            <input 
            type="checkbox" 
            id={props.id} 
            checked={props.isChecked}
            onChange={props.handleInput}
            ></input>
            <label style={props.isChecked ? {textDecoration:'line-through', color:'gray'}: {}} for={props.id}>{props.title}</label>
            </div>
            {props.isHovered && <DeleteIcon />}
        </div>
    )
}

function DeleteIcon() {
    return (
        <div >
            <BiSolidTrashAlt style={{color:'red', marginTop:'3px'}}/>
        </div>
    )
}