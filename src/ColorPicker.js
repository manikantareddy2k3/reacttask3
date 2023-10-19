import React, { useState } from 'react';
import './ColorPicker.css';

const ColorPicker = () => {
  const colors = ['#FF5733', '#33FF57', '#5733FF', '#FFA600', '#33A8FF', '#AD1414', '#FF3399', '#9E00FF', '#FFFF00', '#FF0000'];
  const [selectedColor, setSelectedColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');

  const changeSelectedColor = (color) => {
    setSelectedColor(color);
  };

  const changeBackgroundColor = () => {
    setBackgroundColor(selectedColor);
  };

  return (
    <div>
      <h1 class="heading">Color Picker</h1>
      <div className="color-squares">
        {colors.map((color, index) => (
          <div
            key={index}
            className="color-square"
            style={{ backgroundColor: color }}
            onClick={() => changeSelectedColor(color)}
          ></div>
        ))}
      </div>
      <button onClick={changeBackgroundColor}>Pick the selected color</button>
      <div className="selected-color" style={{ backgroundColor }}></div>
    </div>
  );
};

export default ColorPicker;
