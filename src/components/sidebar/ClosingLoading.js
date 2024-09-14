import React, { useEffect, useState } from 'react';
import './ClosingLoading.css';
import SpinningFlower from '../about/SpiningFlower';


const ClosingLoading = ({ isActive, props, theme }) => {
  const [isClosing, setIsClosing] = useState(false);
  const href = props;
  const color =theme;

  useEffect(() => {
    if (isActive) {
      setIsClosing(false);
    } else {
      setIsClosing(true);
    }
  }, [isActive]);
 

  return (
    <div className={`closing-loading ${isClosing ? 'closing' : ''} ${color === 'light'  ? '' : 'black'}`}>
      <div className="closing-panel closing-panel-left">
        <div className="content">
          <SpinningFlower/>
          <div>
          <p className='href'>{href}</p>
          
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default ClosingLoading;
