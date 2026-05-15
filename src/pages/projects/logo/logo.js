import React from 'react';
import Tilt from 'react-parallax-tilt';
import brain from '../photos/brain.png';
import './logo.css';

const Logo = () => {
  return (
    <div className='mt4 ml1'>
      <Tilt
        className='Tilt  br4 shadow-2'
        style={{ height: '150px', width: '150px' }}
      >
        <div style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <img src={brain} alt='logo' style={{ width: '90px'}}/>
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;