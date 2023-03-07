import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './App';

ReactDOM.render(<Welcome name={<strong>John</strong>} age={30} />
, document.getElementById('root'));

