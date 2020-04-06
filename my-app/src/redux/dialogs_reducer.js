
const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY'
const SEND_MESSAG = 'SEND-MESSAG'

const dialogsReducer = (state, action) =>{
    switch(action.type){
        case  UPDATE_NEW_MESSAGES_BODY:
            state.newMessagesBody = action.body
            return state
        case   SEND_MESSAG:
            let body = state.newMessagesBody
                state.newMessagesBody = ''
                state.messages.push({id: 10, message: body})        
            return state;
        default: 
            return state;
    }

    
}

export const sendMessageCreator  = () =>({type: SEND_MESSAG})

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGES_BODY, body: text})


export default dialogsReducer