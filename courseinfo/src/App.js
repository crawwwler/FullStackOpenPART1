
// COMPONENT TO RENDER HEADER
const Header = ({ course }) => {
  return (
    <div>{course}</div>
  )
}

// COMPONENT WHICH RESPONSIBLE TO RENDER THE COURSES INFO
const Part = ({ title, ex }) => {
  return (
    <div>{title} {ex}</div>
  )
}

// CONTENTS. WE USE A OUR OWN EMELENT NAMED PART HERE 
const Content = ({ contents }) => {
  return (
    <div>
      <Part title={contents[0].name} ex={contents[0].ex} />
      <Part title={contents[1].name} ex={contents[1].ex} />
      <Part title={contents[2].name} ex={contents[2].ex} />
    </div>
  )
}

//COMPONENT TO RENDER THE TOTAL NUMBER OF EXERCISES
const Total = ({ parts }) => {
  return (
    <div>Number of exercises {parts[0].ex + parts[1].ex + parts[2].ex}</div>
  )
}

// MAIN COMPONENT
const App = () => {
  // COURSE AS AN OBJECT. 
  //CONTAINING NAME AND AN ARRAY OF EACH PARTS 
  //EACH PART HAS A NAME AND NUMBER OF EXERCISES
  const course = {
    name: 'Half Stack application development',
    parts: [{
      name: 'Fundamentals of React',
      ex: 10
    },
    {
      name: 'Using props to pass data',
      ex: 7
    },
    {
      name: 'State of a component',
      ex: 14
    }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App