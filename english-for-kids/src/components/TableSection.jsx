import React from 'react';

function TableSection({ categoryTitle, categoryWords, sortFunc }) {
  return (
    <>
      <tr>
        <td>
          <b>{categoryTitle}</b>
        </td>
      </tr>
      {categoryWords.sort(sortFunc).map((word) => (
        <tr>
          <td></td>
          <td>{word.word}</td>
          <td>{word.translation}</td>

          <td>{word.trainCounter}</td>
          <td>{word.correctCounter}</td>
          <td>{word.incorrectCounter}</td>
          <td>
            {(word.correctCounter /
              (word.correctCounter + word.incorrectCounter)) *
              100}
          </td>
        </tr>
      ))}
    </>
  );
}

export default TableSection;
