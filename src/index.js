import React from 'react';
import { render } from 'react-dom';
//import Hello from './Hello';
import Test from './Test';

const shopping = [
  'Eggs',
  'Milk',
  'Bread',
  'Butter'
];

const App = () => (
  <div style={{color: 'skyblue', fontSize: 30 }}>
 <h1 style={{ color: 'Pink' }}>Shopping List</h1>
 <h3 style={{ color: 'lightgreen' }}>We need!</h3>
 <Test title="What to buy" shopping={shopping}/>
 </div> 
 );

render(<App />, document.getElementById('root'));
