import React from 'react';

export default props => {
  console.log('props', props);
  const A = () => {
    console.log('A');
  };

  return (
    <div className="main-content">
      <div className="row">
        <h2>Child-1</h2>
      </div>
    </div>
  );
};
