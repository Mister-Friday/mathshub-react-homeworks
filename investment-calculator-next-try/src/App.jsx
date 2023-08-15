import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import calculateHandler from './components/utils';
import Result from './components/Result';

function App() {
  const textTitle = 'Пепякокалькуляка';

  const [investmentResult, setInvestmentResult] = useState([]);

  const addInvestmentHandler = (userInput) => {
    setInvestmentResult(calculateHandler(userInput));
  };

  return (
    <>
      <Header textTitle={textTitle} />
      <Form onAddInvestment={addInvestmentHandler} />
      <Result result={investmentResult} />
    </>
  );
}

export default App;
