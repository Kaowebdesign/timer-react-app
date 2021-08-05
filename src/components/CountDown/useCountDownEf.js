// Core
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// Slice
import {
    setStatus,
    setSpeed
} from '../Timer/TimerSlice'
// Utils
import {timerStatus} from '../../utils/config'


export const useCountDownEf = ({minutes, seconds, status, speed, setMinutes}) => {
    const dispatch = useDispatch();

    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (status !== timerStatus.STARTED || status === timerStatus.PAUSE) return;
        if (m === 0 && s === 0)  dispatch(setStatus(timerStatus.OVER));
        else if (s == 0) {
          setTime([m - 1, 59]);
        } else {
          setTime([m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(0), parseInt(0)]);
        setMinutes(0);
        dispatch(setSpeed('1000'));
    };


    // Effects

    useEffect(() => {
        const timerID = setInterval(() => tick(), speed);
        return () => clearInterval(timerID);
    });

    useEffect(() => {
        status !== timerStatus.STARTED && setTime([minutes, seconds]);
    },[minutes])

    useEffect(() => {
        status === timerStatus.OVER && reset();
    },[status])


    // Handlers

    const handlerPauseTimer = () => {
        status === timerStatus.STARTED
            ? dispatch(setStatus(timerStatus.PAUSE))
            : dispatch(setStatus(timerStatus.STARTED));
    }
    

    return {
       m, s, handlerPauseTimer
    }
}
