import React, { useState, useEffect, FC } from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button, EndGame } from './components'
import { connect } from 'react-redux'
import { questionsActions } from './redux/actions/questionsAction'
import { scoreActions } from './redux/actions/scoreAction'
import { RootState } from './redux/store'

const { getBirdsQuestions, setRandomQuestion, setIsAnswer, getNextQuestion, setCurrentIndex } = questionsActions
const { nullifyScore, nullifyAllScore } = scoreActions

type MapStatePropsType = {
  randomQuestion: any
  randomQuestionIndex: number
  currentIndex: number
  score: number
}

type MapDispatchPropsType = {
  getBirdsQuestions: () => void
  setRandomQuestion: () => void
  setIsAnswer: () => void
  getNextQuestion: () => void
  setCurrentIndex: () => void
  nullifyScore: () => void
  nullifyAllScore: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const App: FC<PropsType> = props => {
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

const mstp = (state: RootState): MapStatePropsType => ({
  randomQuestion: state.questions.randomQuestion,
  randomQuestionIndex: state.questions.randomQuestionIndex,
  currentIndex: state.questions.currentIndex,
  score: state.score.score
})

export default connect<MapStatePropsType, MapDispatchPropsType, {}, RootState>(mstp, { 
  getBirdsQuestions, setRandomQuestion, 
  setIsAnswer, getNextQuestion, setCurrentIndex,
  nullifyScore, nullifyAllScore 
})(App)
