import React from 'react';

import './Goal.css'
const Goal=(props)=>{
    return<div className="goal" id={props.id} onClick={props.onDelete}>
        {props.label}
        <span className="tooltiptext">Click to Delete</span>
    </div>
}

export default Goal;