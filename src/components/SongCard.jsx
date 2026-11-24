import React from 'react'

function formatDuration(seconds){
  let m=Math.floor(seconds/60)
  let s=seconds%60
  if(s<10){
    s='0'+s
  }
  return m+':'+s
}

function SongCard(props){
  let song=props.song
  let isInPlaylist=props.isInPlaylist
  let addToPlaylist=props.addToPlaylist
  let removeFromPlaylist=props.removeFromPlaylist

  return (
    <div style={{border:'1px solid black',margin:'10px',padding:'10px'}}>
      <p>Title: {song.title}</p>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      <p>Duration: {formatDuration(song.duration)}</p>

      {song.streams>=1000000 && <p>Trending 🔥</p>}

      {isInPlaylist?
        <button onClick={()=>removeFromPlaylist(song.id)}>Remove from Playlist</button>
        :
        <button onClick={()=>addToPlaylist(song)}>Add to Playlist</button>
      }
    </div>
  )
}

export default SongCard
export {formatDuration}
