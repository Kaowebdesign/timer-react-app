// Core
import React, {memo} from 'react';
// Antd
import { Button } from 'antd';
// Ant Icon
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useCountDownEf } from './useCountDownEf';
// Utils
import {timerStatus} from '../../utils/config'


const CountDown = memo(({status, speed, setMinutes, minutes = 0, seconds = 0}) => {

    const {m,s, handlerPauseTimer} = useCountDownEf({minutes, seconds, status, speed, setMinutes});

    const formatTime = (minutes, seconds) => {

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

        return minutes + ':' + seconds;
    }
    

    return (
        <div className="ds-flex align-items-center">
            <div className="ds-flex align-items-center"> 
                <span className={`text text_size_xl ${(status == timerStatus.STARTED && m === 0 && s <= 10) && 'red'}`}>
                    {formatTime(m, s)}
                </span>
            </div>
            {
                (status !== timerStatus.STOP && status !== timerStatus.OVER) &&
                    <Button 
                        className={'mg-l button_color_green'}
                        size={'large'}
                        shape="circle"
                        onClick={handlerPauseTimer}
                        icon={status === timerStatus.STARTED ? <PauseOutlined/> : <CaretRightOutlined />}
                    />
            }
           
        </div>
    )
});

export default CountDown;