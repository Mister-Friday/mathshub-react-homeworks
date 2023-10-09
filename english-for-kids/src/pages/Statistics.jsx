import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import TableSection from '../components/TableSection';
import './Statistics.css';

function Statistics() {
  const [uniqWords, setuniqWords] = useState({});

  const firebaseUrl = useSelector((store) => store.fireBase.fireBaseUrl);

  const userId = localStorage.getItem('userId');

  const fetchUrl = `${firebaseUrl}/userAnswers/${userId}.json`;

  useEffect(() => {
    async function get_data() {
      const response = await fetch(fetchUrl);
      const json = await response.json();

      // console.log('stats:', json);

      // const catList = Object.values(json).map((item) => item.categoryTitle);

      // const catSet = Array.from(new Set(catList));
      // setCategories(catSet);

      // console.log('catList: ', catList);
      // console.log('catSet: ', catSet);

      const uniqCards = Object.values(json).reduce((acc, item) => {
        if (!acc[item.categoryTitle]) {
          acc[item.categoryTitle] = {};
        } else {
          if (acc[item.categoryTitle][item.cardHash]) {
          } else {
            acc[item.categoryTitle][item.cardHash] = {
              ...item,
              trainCounter: item.isTrain ? 1 : 0,
              correctCounter: item.isCorrect ? 1 : 0,
              incorrectCounter: item.isCorrect ? 0 : 1,
            };
          }
          // acc[item.categoryTitle][item.cardHash] = item;
        }
        return acc;
      }, {});
      console.log('uniqCards=', uniqCards);

      setuniqWords(uniqCards);

      // for (let category of catSet) {
      // const categoryWords = new Set(
      //   Object.values(json)
      //     .filter((item) => item.categoryTitle === category)
      //     .map((item) => item.cardHash)
      // );
      // setCatWords((prev) => {
      //   const copy = structuredClone(prev);
      //   copy[category] = [];
      //   return copy;
      // });
      // categoryWords.forEach((word) => {
      //   setCatWords((prev) => {
      //     const copy = structuredClone(prev);
      //     copy[category].push({ title: word });
      //     return copy;
      //   });
      // });
      // console.log('words: ', categoryWords);
      // }
    }

    get_data();
  }, []);

  return (
    <div>
      <h1>Статистика</h1>
      <table>
        <thead>
          <tr>
            <th>Categories</th>
            <th>Words</th>
            <th>Translation</th>
            <th>Trained</th>
            <th>Correct</th>
            <th>Incorrect</th>
            <th>%</th>
          </tr>
        </thead>

        <tbody>
          {Object.entries(uniqWords).map(([catTitle, cards]) => {
            return (
              <TableSection
                key={catTitle}
                categoryTitle={catTitle}
                categoryWords={Object.values(cards)}
                sortFunc={(preCard, card) => {
                  return preCard.word > card.word ? 1 : 0;
                }}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Statistics;
