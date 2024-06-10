import React from 'react';
import PropTypes from 'prop-types';

const Person = (props) => {
  return (
    <div className="person">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.email}</h3>
      <h3>{props.isMarried ? "Married" : "Not Married"}</h3>

      <h3>Children:</h3>
      <ul>
        {props.children.map((child, key) => { 
          return <li key={key}>{child}</li>;
        })}
      </ul>
    </div>
  );
};

Person.PropTypes= {
  name: PropTypes.string,
  age:PropTypes.number,
  email:PropTypes.string,
  isMarried:PropTypes.bool,
  children:PropTypes.arraysOf(propTypes.string)
}

export default Person;
