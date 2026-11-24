import React,{useState} from 'react'
import {Link} from 'react-router'
import SongCard from './SongCard'

function SongsList(props){
  let songs=props.songs
  let playlist=props.playlist
  let addToPlaylist=props.addToPlaylist
  let removeFromPlaylist=props.removeFromPlaylist

  const [selectedGenre,setSelectedGenre]=useState('All')

  let filteredSongs=songs
  if(selectedGenre!=='All'){
    filteredSongs=songs.filter((s)=>s.genre===selectedGenre)
  }

  return (
    <div>
      <h1>Songs</h1>

      <div>
        <label>Genre: </label>
        <select value={selectedGenre} onChange={(e)=>setSelectedGenre(e.target.value)}>
          <option value='All'>All</option>
          <option value='Romantic'>Romantic</option>
          <option value='Motivational'>Motivational</option>
          <option value='Sufi'>Sufi</option>
          <option value='Punjabi'>Punjabi</option>
        </select>
      </div>

      {filteredSongs.map((song)=>{
        let isInPlaylist=playlist.some((s)=>s.id===song.id)
        return(
          <div key={song.id}>
            <SongCard song={song} isInPlaylist={isInPlaylist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>
            <Link to={`/songs/${song.id}`}>View Details</Link>
          </div>
        )
      })}
    </div>
  )
}

export default SongsList
