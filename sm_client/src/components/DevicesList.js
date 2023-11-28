import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import DeviceItem from './deviceItem';
import { Card } from 'react-bootstrap';

const DevicesList = () => {
    return (
        <Container>
            <DeviceItem/> 
        </Container>
    );
};

export default DevicesList;