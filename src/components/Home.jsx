import React from 'react'

function Home(props){
  let songs=props.songs
  let playlist=props.playlist

  let totalSongs=songs.length
  let songsInPlaylist=playlist.length
  let trendingSongs=songs.filter((s)=>s.streams>=1000000).length

  return (
    <div>
      <h1>Home</h1>
      <p>Total Songs: {totalSongs}</p>
      <p>Songs in Playlist: {songsInPlaylist}</p>
      <p>Trending Songs: {trendingSongs}</p>
    </div>
  )
}

export default Home
