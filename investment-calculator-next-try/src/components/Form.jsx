import React, { useState, useRef } from 'react';
import './Form.css';
import ButtonAdd from './UI/ButtonAdd';
import ButtonReset from './UI/ButtonReset';
import ErrorModal from './UI/ErrorModal';

function Form({ onAddInvestment }) {
  const addNewInvestmentHandler = (event) => {
    event.preventDefault();

    const currentSavingsUserInput = current_savings.current.value;
    const yearlyContributionUserInput = yearly_contribution.current.value;
    const expectedReturnUserInput = expected_return.current.value;
    const durationUserInput = duration.current.value;

    if (
      +currentSavingsUserInput <= 0 ||
      +yearlyContributionUserInput <= 0 ||
      +expectedReturnUserInput <= 0 ||
      +durationUserInput <= 0
    ) {
      setError({
        title: 'Ошибка',
        message: 'Отложите хоть что-нибудь!',
      });
      return;
    }

    const userInput = {
      'current-savings': currentSavingsUserInput,
      'yearly-contribution': yearlyContributionUserInput,
      'expected-return': expectedReturnUserInput,
      duration: durationUserInput,
    };

    onAddInvestment(userInput);
  };

  const errorHandler = () => {
    setError(null);
  };

  const [error, setError] = useState(null);

  const current_savings = useRef();
  const yearly_contribution = useRef();
  const expected_return = useRef();
  const duration = useRef();

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onClose={errorHandler}
        />
      )}
      <form className="form" onSubmit={addNewInvestmentHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Ваши текущие накопления ($)</label>
            <input type="number" id="current-savings" ref={current_savings} />
          </p>
          <p>
            <label htmlFor="yearly-contribution">
              Сколько отложите за год ($)
            </label>
            <input
              type="number"
              id="yearly-contribution"
              ref={yearly_contribution}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Ожидаемый Процент (%, в год)
            </label>
            <input type="number" id="expected-return" ref={expected_return} />
          </p>
          <p>
            <label htmlFor="duration">
              Продолжительность Инвестирования (лет)
            </label>
            <input type="number" id="duration" ref={duration} />
          </p>
        </div>
        <p className="actions">
          <ButtonReset type="reset">Сбросить</ButtonReset>
          <ButtonAdd type="submit">Рассчитать</ButtonAdd>
        </p>
      </form>
    </>
  );
}

export default Form;
