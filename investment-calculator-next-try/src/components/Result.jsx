import React from 'react';
import './Result.css';

function Result({ result }) {
  return (
    <>
      <table className="result">
        <thead>
          <tr>
            <th>Год</th>
            <th>Общие накопления</th>
            <th>Накопления с процентов (в год)</th>
            <th>Всего с процентов</th>
            <th>Всего инвестировано</th>
          </tr>
        </thead>
        <tbody>
          {result.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.year}</td>
                <td>{item.savingsEndOfYear}</td>
                <td>{item.yearlyInterest} </td>
                <td>$ 500</td>
                <td>{item.yearlyContribution}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Result;
