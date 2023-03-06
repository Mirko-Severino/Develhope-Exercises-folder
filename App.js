import React from 'react';

function Message() {
  return <p>What a beautiful day!</p>;
}

function Hello() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <Message />
    </div>
  );
}

export default Hello;


