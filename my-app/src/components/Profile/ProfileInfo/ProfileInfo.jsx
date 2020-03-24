import React from 'react';
import classes from './ProfileInfo.module.css'


const ProfileInfo = (props) =>{
    return(
      <div className={classes.content}>
        <div>
          <img src='https://unsplash.com/photos/LY1eyQMFeyo/download' />
        </div>
        <div className={classes.descriptionBlock}>
          ava + description
        </div>
      </div>            
    );
}

export default ProfileInfo;