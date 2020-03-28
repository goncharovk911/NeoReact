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
        newPostText={props.profilePage.newPostText}
        updateNewPostText={props.updateNewPostText}
        addMessages={props.addMessages}
        addPost={props.addPost}/>      
    </div>
    );
}

export default Profile;