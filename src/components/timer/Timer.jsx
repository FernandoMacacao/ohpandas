import React from 'react'
import './timer.css'

const Timer = () => {
  return (
    <div className='app__timer'>
      <div className="timer" id="timer"></div>
    </div>
  )
}

const countdown = () => {
  const countDate = new Date("February 1, 2022 00:00:00").getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  let html = ""

  html ="<div class='timer-display'><p class='timer-info'>"+textDay+"</p><p class='timer-title'>Days</p></div>"+
        "<div class='timer-display'><p class='timer-info'>"+textHour+"</p><p class='timer-title'>Hours</p></div>"+
        "<div class='timer-display'><p class='timer-info'>"+textMinute+"</p><p class='timer-title'>Minutes</p></div>"+
        "<div class='timer-display'><p class='timer-info'>"+textSecond+"</p><p class='timer-title'>Seconds</p></div>"

  if(document.getElementById('timer') != null){
    document.getElementById('timer').innerHTML = html
  } else {
    return
  }


}
setInterval(countdown,1000)

export default Timer
