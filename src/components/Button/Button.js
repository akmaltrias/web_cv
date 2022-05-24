import React from 'react';
import Button from '@mui/material/Button';
import "./Button.css"

const CustomButton = ({text}) => {
  return (
    <div>
        <Button variant="contained" className="custom_button">
            <span className="btn_text">{text}</span>
        </Button>
    </div>
  )
}

export default CustomButton