import React from 'react';
import Goal from './Goal';
import './Goals.css'

const Goals =(props)=>{
    
    const deleteHanlder =(event)=>{
        //alert(event.target.id)
        props.onDeleteGoal(event.target.id)
    }
    return <div className="goals">
    {props.items.map(item=>{
        return(
            <Goal key={item.id} label={item.label} id={item.id} onDelete={deleteHanlder}/>
        )
        
    })}
    </div>
}
export default Goals