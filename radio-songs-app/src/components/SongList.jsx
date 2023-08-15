import React from 'react';
import './SongList.css';
import SongItem from './SongItem';

function SongList({ songs }) {
    return (
      <div className="song-list">
        {songs.map((song)=> (
<SongItem song={song} key={song.id}/>
        ))}
      </div>
    );
  }

  export default SongList;