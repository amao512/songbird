import React, { useState, useEffect } from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button } from './components'
import EndGame from './components/EndGame/EndGame'
import { connect } from 'react-redux'
import { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion, setCurrentIndex } from './redux/actions/questionsAction'

const App = props => {
  const { 
    birdsQuestions, getBirdsQuestions, setRandomQuestion, 
    randomQuestion, currentIndex, isAnswer, setCurrentIndex,
    randomQuestionIndex, setIsAnswer,getNextQuestion,
  } = props
  
  const [allScore, setAllScore] = useState(0)
  const [score, setScore] = useState(5)
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

  const onHandleReply = answer => {
    if(randomQuestion.id === answer.id){
      setAllScore(prev => prev + score)
      setScore(5)
      setIsAnswer()
    } else {
      setScore(prev => prev - 1)
      console.log(score)
    }
  }

  useEffect(() => {
    getBirdsQuestions()
    setRandomQuestion()
  }, [getBirdsQuestions, setRandomQuestion, currentIndex])

  return (
    <div className='App'>
      <div className='container'>
        <Header currentQuestion={currentIndex} score={allScore} />

        <section className='content'>
          {!end ? (
            <>
              <Question bird={randomQuestion} isAnswer={isAnswer} />
              <AnswerOptions birds={birdsQuestions} randomAnswer={randomQuestionIndex} onAnswer={onHandleReply} />
              <BirdInfo bird={randomQuestion} isAnswer={isAnswer} />
              <Button nextQuestion={nextQuestion} isAnswer={isAnswer} />
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
  birdsQuestions: state.questions.birdsQuestions,
  randomQuestion: state.questions.randomQuestion,
  randomQuestionIndex: state.questions.randomQuestionIndex,
  currentIndex: state.questions.currentIndex,
  isAnswer: state.questions.isAnswer
})

export default connect(mstp, { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion,setCurrentIndex })(App)
