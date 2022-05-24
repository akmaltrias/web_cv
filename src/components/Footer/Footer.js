import React from 'react';
import { Typography } from "@mui/material";
import { resumeData } from '../../utils/resumeData';

import "./Footer.css"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer_left'>
        <span>{resumeData.nama}</span>
      </div>

      <div className='footer_right'>
        <Typography className="footer_copyright">
          Desain dari {""}
          <a href='https://thetav.online/html/mat/default/index.html' target="_blank" rel='noreferrer'>
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  )
}

export default Footer