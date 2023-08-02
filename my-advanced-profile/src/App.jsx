import React from 'react';
import './App.css';
import './components/Profile';
import Profile from './components/Profile';

function App() {
  const userData = {
    userPhoto: 'https://avatars.githubusercontent.com/u/125909673?v=4',
    userName: 'Иван Мохов',
    textBio: 'Человек — общественное существо, обладающее разумом и сознанием.',
    textCitation:
      '"Твой путь — путь волка, но путь не волк, если в тебе не ты." ©',
    userHobbies: ['Веселье', 'веселье', 'Мелиорация'],
  };
  return (
    <div className="App">
      <Profile userData={userData} />
    </div>
  );
}

export default App;
