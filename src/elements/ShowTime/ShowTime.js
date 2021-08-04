// Core
import React, {memo} from 'react';
// Antd
import { Button } from 'antd';
// Ant Icon
import { PauseOutlined, CaretRightOutlined } from '@ant-design/icons';


const ShowTime = memo(({timerType = 'not-started', minutes = '00', seconds = '00'}) => {

    return (
        <div className="ds-flex align-items-center">
            <div className="ds-flex align-items-center"> 
                <span className="text text_size_xl">{minutes}</span>
                <span className="text text_size_xl">:</span>
                <span className="text text_size_xl">{seconds}</span>
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

export default ShowTime;