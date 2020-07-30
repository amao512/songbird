import React from 'react'
import { Header, Question, AnswerOptions, BirdInfo, Button } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='container'>
        <Header />

        <section className='content'>
          <Question />
          <AnswerOptions />
          <BirdInfo />
          <Button />
        </section>
      </div>
    </div>
  );
}

export default App
