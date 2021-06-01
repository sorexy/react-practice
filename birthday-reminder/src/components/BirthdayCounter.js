import React from 'react';
import './BirthdayCounter.css';

function BirthdayCounter(props) {
    return (
        <h2>{props.count} birthdays today</h2>
    );
}


export default BirthdayCounter;
