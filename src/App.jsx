import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/youtube-clone' element={<Home sidebar={sidebar} />} />
        <Route path='/youtube-clone/video/:categoryId/:videoId' element={<Video />} />
      </Routes>
    </div>
  )
}

export default App;