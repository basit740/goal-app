import React, {useState} from 'react';
import './NewGoal.css';

const NewGoal =(props)=>{
    const [inputText, setInputText] = useState('');

    const textChangeHanlder=(event)=>{
        setInputText(event.target.value)
    }
    const submitHandler=(event)=>{
        event.preventDefault();
    
        const newGoal={
            id:Math.random(),
            label:inputText
        }
        props.onNewGoal(newGoal);

        setInputText('')
    }
    return <div className="new-goal">
        <form onSubmit={submitHandler}>
        <div className="control-group">
        <input type="text" value={inputText} onChange={textChangeHanlder} autoFocus={true} />
        
        <button type="submit">Add Goal</button>
        </div>
        </form>
    </div>
}
export default NewGoal;