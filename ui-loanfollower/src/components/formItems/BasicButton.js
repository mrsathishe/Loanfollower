import React from 'react';
import { Button } from 'react-bootstrap';

const BasicButton = ({ disabled = false, label = 'Button', onClick, children }) => {
    return (
        <Button variant="primary" type="submit" disabled={disabled} onClick={onClick}>
            {label}
            {children}
        </Button>
    )
}

export default BasicButton;