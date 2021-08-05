// Core
import React, {memo} from 'react';
// Antd
import { InputNumber, Button, Radio } from 'antd';
// Hooks
import { useTimerEf } from './useTimerEf';
// Elements
import Speed from '../../elements/Speed/Speed';
import CountDown from '../CountDown/CountDown';
// Utils
import {timerStatus} from '../../utils/config'


const Timer = memo(() => {
    const {
        status, speed, minutes, setMinutes,
        handlerTimerSubmit, handlerChangeMinutes, handlerChangeSpeed
    } = useTimerEf();

    return (
        <div className="ds-flex flex-column align-items-center">
            <div className="ds-flex align-items-center">
                <h2 className="mg-b-0 mg-r">Countdown:</h2>
                <InputNumber 
                    placeholder="(min)" 
                    value={minutes}
                    onChange={handlerChangeMinutes}
                    style={{width: 150}} 
                    size={'large'}
                    min={0}
                    step={1}
                    />
                
                <Button 
                    className={`mg-l button_type_start ${(status == timerStatus.STARTED || status == timerStatus.PAUSE) ? 'button_color_red' : 'button_color_light-green'}`}
                    size={'large'} 
                    onClick={() => handlerTimerSubmit()}>
                        {(status == timerStatus.STARTED || status == timerStatus.PAUSE) ? 'Reset' : 'Start'}
                </Button>
            </div>
            <CountDown 
                minutes={minutes} 
                setMinutes={setMinutes}
                status={status}
                speed={speed}
            />
            <Speed value={speed} handlerChange={handlerChangeSpeed}/>
        </div>
    )
});

export default Timer;