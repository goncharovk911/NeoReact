import React from 'react';
import classes from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem;';
import Message from './Message/Message';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogs_reducer';



const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage

    let newText = React.createRef() 

    let onSentMessgaeClick = () => {
        props.store.dispatch(sendMessageCreator())       
        /*let newLogh = state.dialogsPage.push(text)*/
      
    }//Message
    
    
    let dialogsElements = state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} /> );
    
    let messageElements = state.messages.map(message => <Message message= {message.message} />)
    
    let newMessgaeBody = state.newMessgaeBody
    
    let onNewMessgaeClick = (event) => {
        let body = event.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    

    return (
        <div className={classes.dialogs}>
            <div className={classes.items}>
               {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messageElements}</div>
                <div>
                    <textarea value = {newMessgaeBody}
                              placeholder='Enter you message'
                              onChange={onNewMessgaeClick}/>
                </div>
                <div>                
                    <button onClick = {onSentMessgaeClick}>Send</button>
                 </div>
            </div>
           
        
        </div>
    )
}

export default Dialogs;