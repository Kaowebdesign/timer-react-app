// Core
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
// Slice
import {
    selectTimerSpeed,
    selectTimerStatus
} from '../../components/Timer/TimerSlice'

export const useCountDownEf = ({minutes, seconds}) => {

    const speed = useSelector(selectTimerSpeed);
    const status = useSelector(selectTimerStatus);

    const [paused, setPaused] = useState(false);
    const [over, setOver] = useState(false);
    const [[m, s], setTime] = useState([minutes, seconds]);

    const tick = () => {
        if (status !== 'started' || over) return;
        if (m === 0 && s === 0) setOver(true);
        else if (s == 0) {
          setTime([m - 1, 59]);
        } else {
          setTime([m, s - 1]);
        }
    };

    const reset = () => {
        setTime([parseInt(minutes), parseInt(seconds)]);
        setPaused(false);
        setOver(false);
    };

    useEffect(() => {
        const timerID = setInterval(() => tick(), speed);
        return () => clearInterval(timerID);
    });

    useEffect(() => {
        setTime([minutes, seconds]);
    },[minutes])
    

    return {
       m, s
    }
}
