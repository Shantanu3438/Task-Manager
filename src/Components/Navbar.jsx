export default function Navbar() {
    return (
        <div className="Navbar">
            <NavButton text="To Do List"/>
            <NavButton text="Timer"/>
        </div>
    )
}

function NavButton(props) {
    return (
        <button type="button" className="Navbar--button">{props.text}</button>
    )
}
