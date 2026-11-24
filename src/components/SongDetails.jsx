import React from 'react'
import {useParams} from 'react-router'
import SongCard from './SongCard'

function SongDetails(props){
  let songs=props.songs
  let playlist=props.playlist
  let addToPlaylist=props.addToPlaylist
  let removeFromPlaylist=props.removeFromPlaylist

  const {id}=useParams()
  let song=songs.find((s)=>s.id===Number(id))

  if(!song){
    return <p>Song not found</p>
  }

  let isInPlaylist=playlist.some((s)=>s.id===song.id)

  return (
    <div>
      <h1>Song Details</h1>
      <SongCard song={song} isInPlaylist={isInPlaylist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>
      <p>Album: {song.album}</p>
      <p>Year: {song.year}</p>
      <p>Streams: {song.streams}</p>
    </div>
  )
}

export default SongDetails
