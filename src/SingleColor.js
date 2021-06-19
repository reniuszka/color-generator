import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, index, weight, hexColor }) => {
  const [alert, setAlert] = useState(false);

  // background color
  const bgC = rgb.join(',');
  console.log(bgC);
  // convering rgb color to hex, rhbToHex taken from the internet how to convert it
  // const hex = rgbToHex(...rgb);
  const hexValue = `#${hexColor}`;
  //once the alert changes ten I want to set my settimeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 2000);
    // before I set another tiout let me clear the first one
    return () => clearTimeout(timeout);
  }, [alert]);

  return (
    <article
      className={`color ${index > 19 && 'color-light'}`}
      style={{ backgroundColor: `rgb(${bgC})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
      }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexValue}</p>
      {alert && <p className='alert'>copied to clipboard</p>}
    </article>
  );
};

export default SingleColor;
