import React from 'react';

const Image = ({ errSrc, alt, ...props }) => (
  <img {...props} onError={(evt) => (evt.target.src = errSrc)} alt={alt} />
);

export default Image;
