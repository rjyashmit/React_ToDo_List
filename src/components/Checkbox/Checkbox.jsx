import './Checkbox.css'

export default function Checkbox({ todo, deleteTodo }) {
    return (
        <div className="checkbox-div">
            <div className='checkbox'>
                <input type="checkbox" />
                <label>{todo}</label>
            </div>
            <button className='delete' onClick={deleteTodo}>x</button>
        </div>
    )
}