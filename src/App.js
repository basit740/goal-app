import React, {useState} from 'react';
import './App.css';

import Goals from './components/goal/Goals';
import NewGoal from './components/NewGoal/NewGoal';
const DUMMY_GOALS=[
  {id:1, label:'Get Educated'},
];

function App() {

  const[goals, setGoals] =useState(DUMMY_GOALS)

  const inputTextHandler=(newGoal)=>{
    console.log(newGoal);
    setGoals((prevGoals)=>{
      return [...prevGoals, newGoal]
    })
    //console.log(goals)
  }

  const deleteGoalHandler =(goalId)=>{
    //alert(goalId);
   const filteredGoals= goals.filter(goal=>goal.id !=goalId);
   setGoals(filteredGoals)
  }
  return (
    <div className="App">
    <h1>Goals App</h1>
    <NewGoal onNewGoal={inputTextHandler} />
    {goals.length ==0 && <h2>No Goals</h2>}
    {goals.length >0 && <Goals items={goals} onDeleteGoal={deleteGoalHandler}/> }
      
    </div>
  );
}

export default App;
