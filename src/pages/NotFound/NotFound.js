import React from 'react';
import { Button } from 'react-bootstrap';
import notFound from '../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <div>
                <img src={notFound} alt="" />
                <Button>Go To Home</Button>
            </div>
        </div>
    );
};

export default NotFound;