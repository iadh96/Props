import Image from './crazy.jpg';
import React from 'react';
import PropTypes from 'prop-types';

const Profile = props =>{
    console.log(`props:`,props)
    return (
      <div style={{marginTop: "200px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems:"center", backgroundColor: "brown", color: "white", textAlign: "justify", fontFamily: "arial"}}>
      <h1>
      Welcome to my space
          <br/>
          
          <br/>
          Your name : <img src = {Image} alt = "my-Profile-Pic" {...props.children} style={{width: "10%", height: "10%"}} /> {props.FullName}
          <br/>
          Your bio : {props.Bio}
          <br/>
          Your profession : {props.Profession}
          <br/>
          <button onClick={() => props.handleName(`Iadh`)}>
            ClickMe
            </button>
    </h1>
      </div>
    );
   };
   export default Profile;

   Profile.defaultProps = {
       FullName: 'not found',
       Bio: 'not found',
       Profession: 'not found',
   };

   Profile.propTypes = {
FullName: PropTypes.string,
Bio: PropTypes.string,
Profession : PropTypes.string
   }