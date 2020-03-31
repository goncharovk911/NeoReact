import React from 'react';
import classes from './Profile.module.css'
import MyPost from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
const Profile = (props) =>{
  
  return(
    <div className= {classes.content}>
      <ProfileInfo/>         
      <MyPost 
        posts={props.profilePage.posts} 
        dispatch={props.dispatch}
        addMessages={props.addMessages}/>      
    </div>
    );
}

export default Profile;