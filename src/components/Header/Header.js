import React from "react";
import header_image from './../../assets/headerimage.png';
import './Header.css';

function HeaderImage() {
  return (
    <React.Fragment>
      <img src={header_image} alt="The Rainbow Spoonie logo - a rainbow heart on a white background" id="header-image" />
    </React.Fragment>
  );
}

export default HeaderImage;