import React from 'react';

export default ({ _handleB }) => {
  return (
    <div className="main-content">
      <div className="row">
        <h2>Child-2</h2>
        <a href="#" onClick={_handleB}>
          {' '}
          Click here{' '}
        </a>
      </div>
    </div>
  );
};
