import React, { useState, useEffect } from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button, EndGame } from './components'
import { connect } from 'react-redux'
import { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion, setCurrentIndex } from './redux/actions/questionsAction'
import { nullifyScore, nullifyAllScore } from './redux/actions/scoreAction'

const App = props => {
  const { 
    getBirdsQuestions, setRandomQuestion,
    currentIndex, setCurrentIndex, setIsAnswer, getNextQuestion,
    nullifyScore, nullifyAllScore, score
  } = props
  
  const [end, setEnd] = useState(false)

  const nextQuestion = () => {    
    setEnd(currentIndex >= 5)
    setIsAnswer()

    if(currentIndex >= 5){
      setCurrentIndex()
    } else {
      getNextQuestion()
      setRandomQuestion()
    }
  }

  const toggleModal = () => {
    setEnd(false)
    nullifyAllScore()
  }

  useEffect(() => {
    getBirdsQuestions()
    setRandomQuestion()
  }, [getBirdsQuestions, setRandomQuestion, currentIndex])

  useEffect(() => {
    if(score < 0){
      nullifyScore()
    }
  }, [score, nullifyScore])

  return (
    <div className='App'>
      <div className='container'>
        <Header />

        <section className='content'>
          {!end && <>
              <Question />
              <AnswerOptions />
              <BirdInfo />
              <Button nextQuestion={nextQuestion} />
            </>
          }
          
          {end && <EndGame toggle={toggleModal} />}
        </section>
      </div>
    </div>
  )
}

const mstp = state => ({
  randomQuestion: state.questions.randomQuestion,
  randomQuestionIndex: state.questions.randomQuestionIndex,
  currentIndex: state.questions.currentIndex,
  score: state.score.score
})

export default connect(mstp, { 
  getBirdsQuestions, setRandomQuestion, 
  setIsAnswer, getNextQuestion, setCurrentIndex,
  nullifyScore, nullifyAllScore 
})(App)
