import { useState, useRef } from 'react'
import Proposal from './components/Proposal'
import OurStory from './components/OurStory'

function App() {
  const [saidYes, setSaidYes] = useState(false)
  const audioRef = useRef(null)

  const handleYesClick = () => {
    setSaidYes(true)
    
    // Play background music when YES is clicked
    if (audioRef.current) {
      audioRef.current.play().catch(err => {
        console.log('Audio play failed:', err)
      })
    }
  }

  return (
    <div className="relative">
      {/* Background music - starts playing after YES */}
      <audio ref={audioRef} id="loveSong" loop>
        <source src="/Edd_Sheeran_-_Perfect_(mp3.pm).mp3" type="audio/mpeg" />
      </audio>

      {/* Proposal Section */}
      <Proposal onYesClick={handleYesClick} />

      {/* Our Story Section - Only appears after YES is clicked */}
      {saidYes && <OurStory />}
    </div>
  )
}

export default App
