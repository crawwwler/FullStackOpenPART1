import { useState } from 'react'


// HEADER COMPONENT 
const Header = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

// BUTTON COMPONENT
const Button = ({ functionality, text }) => {
  return (
    <button onClick={functionality}>{text}</button>
  )
}

 // statistic line component
const StatisticLine = ({ text, amount }) => {

  let helper = ''
  if (text === 'positive') {
    helper = '%'
  }
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{text}</td>
            <td>{isNaN(amount) ? 0 : amount}{helper}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

// statistic component
const Statistics = ({ stats }) => {

  if (stats[3].amount === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <div>
      <StatisticLine text={stats[0].rev} amount={stats[0].amount} />
      <StatisticLine text={stats[1].rev} amount={stats[1].amount} />
      <StatisticLine text={stats[2].rev} amount={stats[2].amount} />
      <StatisticLine text={stats[3].rev} amount={stats[3].amount} />
      <StatisticLine text={stats[4].rev} amount={stats[4].amount} />
      <StatisticLine text={stats[5].rev} amount={stats[5].amount} />
    </div>
  )
}

// ROOT COMPONENT
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setClicks] = useState(0)

  // THREE FUNCTIONS TO HANDLE THE EVENTS
  const goodUpdate = () => {
    setClicks(clicks + 1)
    setGood(good + 1)
  }
  const neutralUpdate = () => {
    setClicks(clicks + 1)
    setNeutral(neutral + 1)
  }
  const badUpdate = () => {
    setClicks(clicks + 1)
    setBad(bad + 1)
  }

  const average = (good - bad) / clicks
  const positive = (good / clicks) * 100
  const statsArray = [{ rev: 'good', amount: good },
  { rev: 'neutral', amount: neutral },
  { rev: 'bad', amount: bad },
  { rev: 'all', amount: clicks },
  { rev: 'average', amount: average },
  { rev: 'positive', amount: positive }]  
  
  

  return (
    <div>
      <Header text='give feedback' />
      <Button functionality={goodUpdate} text='good' />
      <Button functionality={neutralUpdate} text='neutral' />
      <Button functionality={badUpdate} text='bad' />
      <Header text='statistics' />
      <Statistics stats={statsArray} />
    </div>
  )
}

export default App