import {useCallback, useEffect, useRef, useState} from 'react'
import moment from 'moment'
import "./styles.scss"

const calculateDuration = eventTime => moment.duration(Math.max(eventTime - (Math.floor(Date.now() / 1000)), 0), 'seconds')

const CountDown = ({eventTime, interval}) => {
const [duration, setDuration] = useState(calculateDuration(eventTime))
const timerRef = useRef(0)
const timerCallback = useCallback(() => {
  setDuration(calculateDuration(eventTime))
})

useEffect(() => {
  timerRef.current = setInterval(timerCallback, interval)

  return () => {
    clearInterval(timerRef.current)
  }
}, [eventTime])

  return (
    <div className="timer-container">
      <div>
        {duration.days()} Days, {duration.hours()} Hours, {duration.minutes()} Minutes, {duration.seconds()} Seconds - until migration
      </div>
    </div>
  )
}

export default CountDown