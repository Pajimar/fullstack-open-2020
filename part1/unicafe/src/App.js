import React, {useState} from 'react'


const Title = (props) => {
  return(
    <div>
      <h1>{props.text}</h1><br/>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handler}>
      {props.text}
    </button>
  )
}

const Statistic = (props) => {
  return(
      <tr>
        <td>{props.text}</td><td>{props.value}</td>
      </tr>
  )
}

const Statistics = (props) => {
  var [good, neutral, bad, all, average, positive] = props.values
  
  return(
    <div>
      <table>
        <tbody>
          <Statistic text="good" value={good}/>
          <Statistic text="neutral" value={neutral}/>
          <Statistic text="bad" value={bad}/> 
          <Statistic text="all" value={all}/> 
          <Statistic text="average" value={average}/> 
          <Statistic text="positive" value={positive}/>
        </tbody>     
      </table>
    </div>
  )
}

const Feedback = (props) => {
  console.log(props)
  const [good, neutral, bad, all, average, positive] = props.values

  if(good > 0 || neutral > 0 || bad > 0){
    return (
      <div>
        <Statistics values={props.values} />
      </div>
    )
  }else{
    return(
      <p>No feedback given</p>
    )
  }
}

function App() {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const all = good + neutral + bad
  const average =  (good - bad) / all
  const positive = good/all

  const values = [good, neutral, bad, all, average, positive]

  const countGood = () => {
    setGood(good+1)
  }

  const countNeutral = () => {
    setNeutral(neutral + 1)
  }

  const countBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Title text="give feedback" />
      <Button text="good" handler={countGood} />
      <Button text="neutral" handler={countNeutral} />
      <Button text = "bad" handler={countBad} />

      <Title text="statistics" />
      <Feedback values = {values}/>
      
    </div>
  );
}

export default App;
