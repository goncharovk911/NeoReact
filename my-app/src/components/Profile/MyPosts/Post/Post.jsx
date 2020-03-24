import React from 'react';
import classes from './Post.module.css';



const Post = (props) =>{
 
  return(
    <div className = {classes.item}>
      <img src={props.image}/>
      { props.message }
       
        <div className = {classes.like}>
          <button onClick  >
            <img src='https://mocacare.com/assets/img/heart.gif'/>
          </button>
          <span>like: <ol>{props.like}</ol></span>
        </div>      
    </div>    
  )
  

}

export default Post