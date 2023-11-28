import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { changeState } from './http/deviceAPI';

const deviceItem = () => {

    function LED_ON(){
        changeState("ON");
    }
    function LED_OFF(){
        changeState("OFF");
    }

    return (
        <Card className='d-flex flex-row justify-content-between align-items-center m-3'>
                <p className='d-flex flex-row m-3'>ESP32</p>
                <div className='d-flex flex-row'>
                    <Button onClick={LED_ON} className='m-2'>Вкл</Button>
                    <Button onClick={LED_OFF} className='m-2'>Выкл</Button>
                </div>
                
        </Card>
    );
};

export default deviceItem;