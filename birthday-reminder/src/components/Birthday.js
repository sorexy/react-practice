import React from 'react';
import './Birthday.css';

function Birthday(props) {
    return (
        <article className="birthday-entry">
            <img src="https://sm.mashable.com/t/mashable_in/feature/d/dogecoin-e/dogecoin-everything-you-need-to-know-about-the-cryptocurrenc_4ssb.960.jpg"></img>
            <div className="person-info">
                <h2>{props.person.name}</h2>
                <h3>{props.person.age} years</h3>
            </div>
        </article>
    );
}

export default Birthday;
