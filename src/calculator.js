import React, { useState } from 'react';
import './calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (result === 'Error') {
      clearInput();
    }
  
    if (value === '=') {
      try {
        if (input.trim() === '' || /[+\-x/]/.test(input.slice(-1))) {
          setResult('Error');
        } else {
          const evaluation = eval(input.replace('x', '*')); // Replace 'x' with '*' for multiplication
          setResult(Number.isNaN(evaluation) ? 'NaN' : evaluation);
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      clearInput();
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };
  

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="calculator">
        <h2>React Calculator</h2>
      <input type="text" value={input} readOnly />
      <div className="result">{result}</div>
      <div className="buttons">
        {[7, 8, 9, '+', 4, 5, 6, '-', 1, 2, 3, 'x', 0, '/', '=', 'C'].map((item) => (
          <button key={item} onClick={() => handleButtonClick(item)}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
