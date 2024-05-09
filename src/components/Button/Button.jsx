import './Button.css';

export default function Button({ onClick }) {
    return (
        <button className='add' onClick={onClick}>Add</button>
    )
}