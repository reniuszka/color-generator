import React, { useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';
// npm install values.js --save
// github.com/noeldelgado/Values.js/

function App() {
  // color chosen
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  // list of colors
  const [list, setList] = useState(new Values('#123456').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(5);
      setList(colors);

      // .all(10) means its divided by 10 (100% :10)
      // If we wont set error to false, once the user makes the mistake the input will always have red border
      setError(false);
      console.log(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        {/* value is equal to color, on submit is my state value  */}
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
            placeholder='#123456'
            // if error is true
            className={`${error ? 'error' : null}`}
          />
          <button type='submit' className='btn'>
            submit
          </button>
        </form>
      </section>
      <section className='colors'>
        {/* list is a state from colors */}
        {list.map((color, index) => {
          console.log(color);
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
