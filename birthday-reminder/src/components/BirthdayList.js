import React from 'react';
import './BirthdayList.css';
import Birthday from './Birthday.js';

function BirthdayList(props) {
    return (
        <section className="birthday-list-container">
            {props.birthdays.map((birthday) => {
                    return <Birthday key={birthday.name} person={birthday} />
            })}
        </section>
    );
}

export default BirthdayList;
