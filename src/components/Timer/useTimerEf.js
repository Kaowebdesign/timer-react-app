// Core
import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// Slice
import {
    selectTimerStatus,
    selectTimerSpeed,
    setSpeed,
    setStatus,
    setTime
} from './TimerSlice'
// Utils
import {timerStatus} from '../../utils/config'


export const useTimerEf = () => {
    
    const dispatch = useDispatch();

     // Selectors
    
     const status = useSelector(selectTimerStatus);
     const speed = useSelector(selectTimerSpeed);

    // State

    const [minutes, setMinutes] = useState(0);


    // Handlers

    const handlerTimerSubmit = () => {
        (status === timerStatus.STARTED || status === timerStatus.PAUSE)
            ? dispatch(setStatus(timerStatus.OVER))
            : dispatch(setStatus(timerStatus.STARTED));
    }

    const handlerChangeMinutes = (value) => {
        setMinutes(Math.round(value));
    }

    const handlerChangeSpeed = (value) => {
        dispatch(setSpeed(value));
    }


    return {
        status, speed, minutes, setMinutes,
        handlerTimerSubmit, handlerChangeMinutes, handlerChangeSpeed
    }
}
