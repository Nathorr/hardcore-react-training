import React from 'react';
import styles from './Person.pcss';
import cx from 'classnames';
import { pure } from 'recompose';
import { FormattedDate, FormattedNumber } from 'react-intl';
import Button from './Button';
import Icon from 'react-fa';
import Gravatar from 'react-gravatar';

const Person = props => {
  const { person, deletePerson } = props;

  const classes = cx(
    styles.person,
    {
      [styles.male]: person.gender === 'm',
      [styles.female]: person.gender === 'f',
    },
  );

  return (
    <div className={classes}>

      <Gravatar email={person.email} />

      {person.lastName}, {person.firstName} [{person.gender}] ({person.age})

      <p>
        <FormattedNumber value={person.salary} style="currency" currency="nok" />
      </p>


      <p>
        <Button onClick={() => deletePerson(person.id)}>
          <Icon size="2x" name="smile-o" /> FIRE ME!!!
        </Button>
      </p>
    </div>
  );
};

export default pure(Person);