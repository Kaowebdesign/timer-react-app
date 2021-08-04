// Core
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// Slice
import {
    selectTimerStatus,
    selectTimerSpeed,
    setSpeed,
    setTime
} from './TimerSlice'
// Libs
import * as workerTimers from 'worker-timers';


export const useTimerEf = () => {
    const dispatch = useDispatch();

    const timer = null;

    // Selectors
    
    const status = useSelector(selectTimerStatus);
    const speed = useSelector(selectTimerSpeed);


    // State

    const [minutes, setMinutes] = useState(0);
    


    // Handlers

    const startTimer = () => {
        timer = workerTimers.setInterval(() => {

        },10)
    }

    const handlerTimerSubmit = () => {
        dispatch(setTime(minutes * 60 * 1000))
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
