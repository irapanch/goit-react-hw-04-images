import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <BallTriangle
      height={70}
      width={70}
      radius={5}
      color="rgb(122, 62, 62)"
      ariaLabel="ball-triangle-loading"
      wrapperClass={{}}
      wrapperStyle=""
      visible={true}
    />
  );
};
