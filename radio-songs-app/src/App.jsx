import React, {useState} from 'react';
import './App.css';
import Header from './components/Header';
import SongRequestForm from './components/SongRequestForm';
import SongList from './components/SongList';

const songs = [
  {
    id: 1,
    name: 'Bohemian Rhapsody',
    artist: 'Queen',
    genre: 'Рок',
  },
  {
    id: 2,
    name: 'Shape of You',
    artist: 'Ed Sheeran',
    genre: 'Поп',
  },
  {
    id: 3,
    name: 'Uptown Funk',
    artist: 'Mark Ronson ft. Bruno Mars',
    genre: 'Поп',
  },
  {
    id: 4,
    name: 'Rolling in the Deep',
    artist: 'Adele',
    genre: 'Блюз',
  },
  {
    id: 5,
    name: 'Blinding Lights',
    artist: 'The Weeknd',
    genre: 'Поп',
  },
];

function App() {

  const [songList, setSongList] = useState(songs)

  const AddNewSongHandler = (newSong) => {
setSongList((prevSong) => [newSong, ...prevSong]
)}
 

  return (
    <div className="App">
      <h1>Граммофон</h1>
      <Header />
      <div className="container">
        <SongRequestForm onAddNewSong={AddNewSongHandler}/>
        <SongList songs={songList} />
      </div>
    </div>
  );
}

export default App;
