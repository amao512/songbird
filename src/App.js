import React, { useState, useEffect } from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button, EndGame } from './components'
import { connect } from 'react-redux'
import { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion, setCurrentIndex } from './redux/actions/questionsAction'

const App = props => {
  const { 
    getBirdsQuestions, setRandomQuestion, randomQuestion, 
    currentIndex, setCurrentIndex, setIsAnswer, getNextQuestion,
  } = props
  
  const [allScore, setAllScore] = useState(0)
  const [score, setScore] = useState(5)
  const [end, setEnd] = useState(false)

  const onHandleReply = answer => {
    if(randomQuestion.id === answer.id){
      setAllScore(prev => prev + score)
      setScore(5)
      setIsAnswer()
    } else {
      setScore(prev => prev - 1)
    }
  }

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

  useEffect(() => {
    getBirdsQuestions()
    setRandomQuestion()
  }, [getBirdsQuestions, setRandomQuestion, currentIndex])

  useEffect(() => {
    if(score < 0){
      setScore(0)
    }
  }, [score])

  return (
    <div className='App'>
      <div className='container'>
        <Header score={allScore} />

        <section className='content'>
          {!end ? (
            <>
              <Question />
              <AnswerOptions onReply={onHandleReply} />
              <BirdInfo />
              <Button nextQuestion={nextQuestion} />
            </>
          ) : (
            <EndGame score={allScore} />
          )}
        </section>
      </div>
    </div>
  )
}

const mstp = state => ({
  randomQuestion: state.questions.randomQuestion,
  randomQuestionIndex: state.questions.randomQuestionIndex,
  currentIndex: state.questions.currentIndex,
})

export default connect(mstp, { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion,setCurrentIndex })(App)
