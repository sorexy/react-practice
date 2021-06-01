import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

import BirthdayCounter from './components/BirthdayCounter.js';
import BirthdayList from './components/BirthdayList.js';
import ClearButton from './components/ClearButton.js';

import { birthdayList } from './data/birthdays.js';


function App() {
  const [birthdays, setBirthdayList] = useState(birthdayList);


  const handleClear = () => {
      setBirthdayList([]);
  }

  return (
    <div className="App">
        <section className="inner-container">
            <BirthdayCounter count={birthdays.length} />
            <BirthdayList birthdays={birthdays}/>
            <ClearButton handleClear={handleClear} />
        </section>
    </div>
  );
}

export default App;
