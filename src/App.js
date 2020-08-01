import React, { useState, useEffect } from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button } from './components'
import birdsData from './data'
import EndGame from './components/EndGame/EndGame'

const App = () => {
  const [index, setIndex] = useState(0)
  const [birds, setBirds] = useState(birdsData[index])
  const [randomAnswer, setRandomAnswer] = useState(0)
  const [rightAnswer, setRightAnswer] = useState(false)
  const [allScore, setAllScore] = useState(0)
  const [score, setScore] = useState(5)
  const [end, setEnd] = useState(false)
  const [questions, setQuestions] = useState(0)

  const nextQuestion = () => {
    setRightAnswer(false)
    setIndex(prev => prev + 1)
    setQuestions(prev => prev + 1)
    setEnd(questions >= 5)
    setRandomAnswer(Math.floor(Math.random() * Math.floor(5)))
  }

  const onHandleReply = answer => {
    if(birds[randomAnswer].id === answer.id){
      setRightAnswer(true)
      setAllScore(prev => prev + score)
      setScore(5)
    } else {
      setScore(prev => prev - 1)
      console.log(score)
    }
  }

  useEffect(() => {
    if(index >= birdsData.length){
      return setBirds(birdsData[0])
    }

    setBirds(birdsData[index])
  }, [index])

  useEffect(() => {
    setRandomAnswer(Math.floor(Math.random() * Math.floor(5)))
  }, [])

  return (
    <div className='App'>
      <div className='container'>
        <Header currentQuestion={index} score={allScore} />

        <section className='content'>
          {!end ? (
            <>
              <Question bird={birds[randomAnswer]} rightAnswer={rightAnswer} />
              <AnswerOptions birds={birds} randomAnswer={randomAnswer} onAnswer={onHandleReply} />
              <BirdInfo bird={birds[randomAnswer]} rightAnswer={rightAnswer} />
              <Button nextQuestion={nextQuestion} rightAnswer={rightAnswer} />
            </>
          ) : (
            <EndGame score={allScore} />
          )}
        </section>
      </div>
    </div>
  )
}

export default App
