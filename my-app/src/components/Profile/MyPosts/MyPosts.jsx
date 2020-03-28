import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    

    let postsElements = props.posts.map(p  => <Post message = {p.message} like = {p.likesCount} image =  {p.image}/>)

    let newPostElement = React.createRef()

    let addPost = () => { 
        
        let text = newPostElement.current.value
        
        
        props.addPost(text)
        props.updateNewPostText('')
    }//Profile

   
    let onPostChange = () =>{
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }
 

    return(
        <div className = {classes.item}>
           <h3> My posts</h3>
            <div>
                <div>
                    <textarea ref = {newPostElement}
                            onChange = {onPostChange}
                            value = {props.newPostText}/>
                </div>
                <div>                
                    <button onClick = { addPost } >All post</button>
                </div>
            </div>
            <div className = {classes.post}>
               {postsElements}          
            </div>
        </div>
        )
    }

export default MyPosts