// Core
import React, {memo} from 'react';
// Antd
import { Radio } from 'antd';

const defaultConfig = [
    {
        id: '1',
        value: '1000',
        name: '1X'
    },
    {
        id: '2',
        value: '666.66',
        name: '1.5X'
    },
    {
        id: '3',
        value: '500',
        name: '2X'
    },
]

const Speed = memo(({value, handlerChange, config = defaultConfig}) => {

    return (
        <>
            <Radio.Group value={value} buttonStyle="solid" onChange={(e) => handlerChange(e.target.value)}>
                {
                    config.map((item) => 
                        <Radio.Button value={item.value} key={item.id}>{item.name}</Radio.Button>)
                }
            </Radio.Group>
        </>
    )
});

export default Speed;