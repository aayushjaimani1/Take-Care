import React from 'react'
import '../track.css'

export const Tracker = (props) => {
  const { track } = props;
  const submitbtn = (e) => {
    e.preventDefault();
  }
  return (
    <main>
        <nav>
            <p><img src="assests/logo.svg" alt=""/>TAKE CARE</p>
        </nav>
        <section>
            <img src="assests/map.svg" id='img' alt="" />
            <button onClick={track} id="track">Start Tracking</button>
        </section>
    </main>
  )
}
