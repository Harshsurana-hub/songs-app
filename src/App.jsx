import React,{useState} from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router'
import Home from './components/Home'
import SongsList from './components/SongsList'
import SongDetails from './components/SongDetails'
import Playlist from './components/Playlist'
import songs from './songs.js'

function App() {

  const [playlist,setPlaylist]=useState([])

  function addToPlaylist(song){
    setPlaylist([...playlist,song])
  }

  function removeFromPlaylist(id){
    setPlaylist(playlist.filter((s)=>s.id!==id))
  }

  return (
    <BrowserRouter>

      <div>
        <Link to='/'>Home</Link>{"  |  "}
        <Link to='/songs'>Songs</Link>{"  |  "}
        <Link to='/playlist'>Playlist</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home songs={songs} playlist={playlist}/>} />
        <Route path='/songs' element={<SongsList songs={songs} playlist={playlist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>} />
        <Route path='/songs/:id' element={<SongDetails songs={songs} playlist={playlist} addToPlaylist={addToPlaylist} removeFromPlaylist={removeFromPlaylist}/>} />
        <Route path='/playlist' element={<Playlist playlist={playlist} removeFromPlaylist={removeFromPlaylist}/>} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
