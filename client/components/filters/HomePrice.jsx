import React, { useState } from 'react';
import { SliderContainer, SliderHeader, Slider } from '../Styles';

const HomePrice = ({ initial, price, handlePriceChange }) => {
  const [value, setValue] = useState(initial);
  const [fill, setFill] = useState(75);
  const [max, setMax] = useState(0);
  const [prevMax, setPrevMax] = useState(0);

  const handleDrag = (e) => {
    setValue(e.target.value);
    // setFill((e.target.value / max || initial * 2) * 100);
    // setPrevMax(value);
    // console.log(prevMax, max)
    // if (max > prevMax) {
    //   console.log('we here?');
    //   setMax(value * 2);
    // } else if (max < prevMax) {
    //   console.log('or here?');

    //   setMax(value * 1.5);
    // }
    handlePriceChange(e.target.value);
  };

  const handleTextChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <SliderContainer>
      <SliderHeader>
        <span>
          $
          <input
            type="text"
            value={`${value || initial}`}
            onChange={handleTextChange}
          />
        </span>
        {/* <strong>{value || initial}</strong> */}
      </SliderHeader>
      <Slider>
        <input
          type="range"
          min="0"
          max={max || initial * 2}
          step="10"
          value={value}
          onChange={handleDrag}
          style={{ flex: '2' }}
        />
      </Slider>
    </SliderContainer>
  );
};

export default HomePrice;