import React from 'react';
import Quote from './Quotes/Quote';
import Button from './commons/Button';
import RadioButton from './commons/RadioButton';
import RadioButtons from './commons/RadioButtons';

export default function App() {
  const radioButtons = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Yellow', value: 'yellow' }

  ];
  return <RadioButtons 
    radioButtons={radioButtons}
    name="colors"
    onChange={({ target }) => console.log(target.value)}
  />;
}
 
 
