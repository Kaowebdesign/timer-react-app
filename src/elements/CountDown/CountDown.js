// Core
import React, {memo} from 'react';
// Antd
import { Button } from 'antd';
// Ant Icon
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';
import { useCountDownEf } from './useCountDownEf';


const CountDown = memo(({timerType = 'not-started', minutes = 0, seconds = 0}) => {

    const {m,s} = useCountDownEf({minutes, seconds});

    const formatTime = (minutes, seconds) => {

        minutes = minutes.toString().length === 1 ? "0" + minutes : minutes;
        seconds = seconds.toString().length === 1 ? "0" + seconds : seconds;

        return minutes + ':' + seconds;
    }
    

    return (
        <div className="ds-flex align-items-center">
            <div className="ds-flex align-items-center"> 
                <span className="text text_size_xl">{formatTime(m, s)}</span>
            </div>
            {
                timerType !== 'not-started' &&
                    <Button 
                        className={`mg-l button_color_green ${timerType}`}
                        size={'large'}
                        shape="circle"
                        icon={timerType === 'start' ? <PauseOutlined/> : <CaretRightOutlined />}
                    />
            }
           
        </div>
    )
});

export default CountDown;