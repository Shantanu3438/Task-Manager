export default function ToDoBody() {
    return (
        <div className="ToDoBody">
            <div>
                <div className="ToDoBody--addItem">
                    <input type="checkbox"></input>
                    <input type="textbox" className="addItem--text" id="addItem" placeholder="Add a new To Do item"></input>
                </div>
                <div className="ToDoBody--items">
                <ToDoItem title="Buy Milk" id="1"/>
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