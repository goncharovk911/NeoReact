import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem;';
import Message from './Message/Message';



const Dialogs = (props) => {

    let newText = React.createRef()

    let PostText = () => {
        
        let text = newText.current.value;
        props.addMessages(text)
        newText.current.value = " "
        /*let newLogh = state.dialogsPage.push(text)*/
      
    }//Message
    

    let dialogsElements = props.state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
    let messageElements = props.state.messages.map(message => <Message message= {message.message} />)


    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref = {newText}></textarea>
            </div>
            <div>                
                <button onClick = {PostText}>All post</button>
            </div>
        <div >{PostText}</div>
        </div>
    )
}

export default Dialogs;