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


export const useTimerEf = () => {
    const dispatch = useDispatch();

     // Selectors
    
     const status = useSelector(selectTimerStatus);
     const speed = useSelector(selectTimerSpeed);

    // State

    const [minutes, setMinutes] = useState(0);
   

    const handlerTimerSubmit = () => {
        dispatch(setStatus('started'));
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
