import { useState } from 'react'

// HEADER COMPONENT
const Header = ({ text }) => {
  return (
    <h2>{text}</h2>
  )
}

// BODY COMPONENT
const Body = ({ text }) => {
  return (
    <div>{text}</div>
  )
}

// VOTE COMPONENT
const Vote = ({ votes }) => {
  return (
    <div>has {votes} votes</div>
  )
}

// BUTTON COMPONENT
const Button = ({ functionality, text }) => {
  return (
    <button onClick={functionality}>{text}</button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length)) // <= THANKS TO STACKOVERFLOW
  const [voted, setVoted] = useState(false) // THIS ONE WAS MY IDEA TO AVOID USER FROM VOTE ONE
  //ANECDOT BACK TO BACK CAUSE I FELT THAT WAS A LITTLE STRANGE 
  //HOWEVER A USER STILL ABLE TO VOTE A ANECDOT , JUST NOT AT ONE ATTEMPT

  // ITS NEXT ANECDOT 
  const nxtanc = () => {
    setVoted(false)
    let x = Math.floor(Math.random() * anecdotes.length)
    setSelected(x)
  }


  const voteCount = () => {
    if (voted === false) {
      setVoted(true)
      const helper = [...votes]
      helper[selected] += 1
      setVotes(helper)
    }
  }

  // I GUESS THERE MIGHT BE A EASIER WAY TO DO IT BUT I DIDNT KNOW SO I DID IT JAVA WAY 
  const indexOfMostVotes = () => {
    let helper = votes[0]
    let indexHelper = 0
    votes.forEach((item, index) => {
      if (item > helper) {
        helper = item
        indexHelper = index
      }
    })
    return indexHelper
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <br />
      <Body text={anecdotes[selected]} />
      <Vote votes={votes[selected]} />
      <br />
      <Button functionality={voteCount} text='vote' />
      <Button functionality={nxtanc} text='next anecdots' />
      <br />
      <Header text='Anecdotes with most votes' />
      <Body text={anecdotes[indexOfMostVotes()]} />
      <Vote votes={votes[indexOfMostVotes()]} />
    </div>
  )
}

export default App