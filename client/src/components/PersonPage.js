import React from "react";
// import { check } from "graphql-anywhere";

// const needsPerson = check => Component => props => {
//   const { person, ...rest } = props;
//   if (!person) {
//     return null;
//   }

//   if (!check(person)) {
//     return "forbiddaaaaaah!!!!";
//   }
//   return <Component {...rest} person={person} />;
// };

const NeedsPerson = props => {
  const { check, person, children } = props;
  if (!person) {
    return null;
  }

  if (!check(person)) {
    return "forbiddaaaaaah!!!!";
  }

  return children({ person });
};

const PersonPage = props => {
  // const { person } = props;

  return (
    <NeedsPerson check={p => p.age > 30} person={props.person}>
      {({ person }) => (
        <div>
          <h2>
            {person.lastName}, {person.firstName}
          </h2>
          <p>A sad life story for Jesse to gloat on and laugh at.</p>
        </div>
      )}
    </NeedsPerson>
  );
};

export default PersonPage;
