import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import {
  Home,
  GsapTo,
  GsapFrom,
  GsapFromTo,
  GsapTimeline
} from "./pages";

function App() {
  return (
   <div className='min-h-screen w-full bg-black'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/gsapto' element={<GsapTo />} />
        <Route path='/gsapfrom' element={<GsapFrom />} />
        <Route path='/gsapfromto' element={<GsapFromTo />} />
        <Route path='/gsaptimeline' element={<GsapTimeline />} />
      </Routes>
    </Router>
   </div> 
  )
}

export default App
