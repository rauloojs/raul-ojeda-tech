import React from 'react';

const Backdrop = (props) => (
  <div
    className="h-100 w-100 top-0 left-0 absolute bg-black-40 z-1"
    {...props}
  ></div>
);

export default Backdrop;