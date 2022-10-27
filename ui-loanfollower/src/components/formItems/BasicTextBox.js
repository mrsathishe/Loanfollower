import React from 'react';
import { Form } from 'react-bootstrap';

const BasicTextBox = ({label, type='text', value='', onChangeInput, errorText, placeholder="Enter value", hint, ...rest }) => {
    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>{label} :</Form.Label>
            <Form.Control type={type} placeholder={placeholder} value={value} onChange={(e) => onChangeInput(e.target.value)} {...rest} />
            {
                hint && 
                <><Form.Text className="text-muted">
                    {hint}
                </Form.Text>
                <br/></>
            }
            
            {
                errorText &&
                <Form.Text className="text-danger" variant={'danger'}>
                    {errorText}
                </Form.Text>
            }
        </Form.Group>
    )
}

export default BasicTextBox;