// Core
import React, {memo} from 'react';
// Antd
import { InputNumber, Button, Radio } from 'antd';
// Hooks
import { useTimerEf } from './useTimerEf';
// Elements
import Speed from '../../elements/Speed/Speed';
import ShowTime from '../../elements/ShowTime/ShowTime';


const Timer = memo(() => {
    const {
        status, speed, minutes,
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
                <Button className="mg-l button_color_light-green button_type_start" size={'large'} onClick={handlerTimerSubmit}>Start</Button>
            </div>
            <ShowTime timerType={status} />
            <Speed value={speed} handlerChange={handlerChangeSpeed}/>
        </div>
    )
});

export default Timer;