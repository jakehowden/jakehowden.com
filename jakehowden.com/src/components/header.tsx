import React, { FC } from 'react';
import profileImage from './../images/jake-cropped.jpg'
import headerImageStyles from '../styles/header-image-styles';

const Header: FC = () => {
  return (
    <div>
        <h3 style={{display: "inline", textAlign: "left"}}>Jake Howden </h3>
        <img src={profileImage} style={headerImageStyles} alt="profile"></img>
        <h5 style={{textAlign: "left"}}>Software Engineer</h5>
        <hr></hr>
    </div>
  );
};

export default Header;