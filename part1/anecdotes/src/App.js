import React, { useState } from 'react'


const Title = (props) => {
  return(
    <div id="title">
      <h1>{props.name}</h1>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handler}>{props.name}</button>
    </div>
  )
}

const Anecdotes = (props) => {
  console.log(props.points)
  var maxValue = 0
  var maxIndex = 0
  for (var i = 0; i < props.points.length; i++){
    if(props.points[i] > maxValue){
      maxValue = props.points[i]
      maxIndex = i
    }
  }
  return (
    <div>
      {props.anecdotes[maxIndex]}
    </div>
    )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0)) // [0,0,0,0,0,0]

  const anecdoteClick = () => {
    setSelected(Math.round(Math.random()*5))
  }
  
  const voteClick = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  return (
    <div>
      <Title name="Anecdotes of the day"/>
      {anecdotes[selected]}
      <Button name="Next anecdote" handler={anecdoteClick}/>
      <Button name="vote" handler={voteClick} />
      has {points[selected]} votes
      <Title name="Anecdotes with most votes"/>
      <Anecdotes anecdotes={anecdotes} points={points}/>
    </div>
  )
}

export default App
