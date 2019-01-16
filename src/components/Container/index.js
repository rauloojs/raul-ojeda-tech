import React from 'react';

const Container = ({ children }) => {
  return (
    <div className="flex flex-column items-center ph3 pb3">
      <div className="measure-wide">
        {children}
      </div>
    </div>
  );
};

export default Container;