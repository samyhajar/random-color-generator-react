import React, { useState } from 'react';
import randomColor from 'randomcolor';

export default function RandomColor() {
  const [color, setColor] = useState(randomColor());

  return (
    <div style={{ color: color }}>
      <button
        onClick={() => {
          setColor(randomColor());
        }}
      >
        Click Me!
      </button>
      <br />
      {color}
    </div>
  );
}
