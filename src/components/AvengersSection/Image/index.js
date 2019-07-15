import React from 'react';

function AvengerImgComponent(props) {
  return (
    <>
      <img
        src={props.src}
        alt="avenger"
        width={props.width}
        height={props.height}
        style={props.style}
      />
    </>
  );
}

export default AvengerImgComponent;
