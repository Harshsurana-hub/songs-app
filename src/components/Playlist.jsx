import React from 'react'
import {formatDuration} from './SongCard'

function Playlist(props){
  let playlist=props.playlist
  let removeFromPlaylist=props.removeFromPlaylist

  if(playlist.length===0){
    return(
      <div>
        <h1>Playlist</h1>
        <p>Your playlist is empty</p>
      </div>
    )
  }

  let totalSeconds=playlist.reduce((total,song)=>total+song.duration,0)

  return (
    <div>
      <h1>Playlist</h1>
      <p>Total Duration: {formatDuration(totalSeconds)}</p>

      {playlist.map((song)=>(
        <div key={song.id} style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
          <p>Title: {song.title}</p>
          <p>Artist: {song.artist}</p>
          <p>Genre: {song.genre}</p>
          <p>Duration: {formatDuration(song.duration)}</p>
          <button onClick={()=>removeFromPlaylist(song.id)}>Remove from Playlist</button>
        </div>
      ))}
    </div>
  )
}

export default Playlist
