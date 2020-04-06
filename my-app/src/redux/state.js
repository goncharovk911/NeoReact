import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGES_BODY = 'UPDATE-NEW-MESSAGES-BODY'
const SEND_MESSAG = 'SEND-MESSAG'
*/

let store = {
    _state: {
        profilePage:{
            posts:[
                {id:1, message:'Hi, how are you?', likesCount: 15, image: "https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
                {id:2, message:"It's my first post", likesCount: 30, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
                {id:3, message:"How a you?", likesCount: 4, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
                {id:4, message:"Can you hear me?", likesCount: 3, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
                {id:5, message:"If someone sees these messages give an answer", likesCount: 0, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
                {id:6, message:"Or at least like", likesCount: 1, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"}
            ],
            newPostText: "Neo"
           
        }
        ,
        dialogsPage:{
            messages:[ 
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it'},
                {id: 3, message: 'Yo'},
                {id: 4, message: 'Hello'},
                {id: 5, message: 'Lol is your'},
                {id: 6, message: 'Bull shit'},
                {id: 7, message: 'Yo'},
                {id: 8, message: 'Hello'}
                
            ],
            dialogs:[ 
                {id: 1, name: 'Kostya'},
                {id: 2, name: 'Vasya'},
                {id: 3, name: 'Denis'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Valera'},
                {id: 7, name: 'Serega'},
                {id: 8, name: 'Anya'},
                {id: 9, name: 'Lena'}
            ],
            newMessagesBody: ''
        }
       
    },    
    getState(){
        return this._state
    },
    _callSubscriber () {
       
    },
       
    subscribe (observer) {
        this._callSubscriber = observer//observer this patern
    },
    /*addMessages  (PropsMessage) {

        let newMessages ={
            id: 9,
            message: PropsMessage
        };
    
        let newDialods ={
            id: 9,
            name: "Daria"
        }
    
        this._state.dialogsPage.messages.push(newMessages)
        this._state.dialogsPage.dialogs.push(newDialods)
        this._callSubscriber(this._state)
    
    },*/
    dispatch (action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebarPage, action);

        this._callSubscriber(this._state)



        /*{if(action.type === ADD_POST){
            let newPost ={
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
                image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ' '
            this._callSubscriber(this._state)
        }   else if (action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText
            this._callSubscriber(this._state)
        }   else if (action.type === UPDATE_NEW_MESSAGES_BODY){
            this._state.dialogsPage.newMessagesBody = action.body
            this._callSubscriber(this._state)
        }   else if (action.type === SEND_MESSAG){
            let body = this._state.dialogsPage.newMessagesBody
            this._state.dialogsPage.newMessagesBody = ''
            this._state.dialogsPage.messages.push({id: 10, message: body})
            this._callSubscriber(this._state)
        }}*/
    }
    
    
    
    
}
/*export const addPostActionCreator = () =>({ type: ADD_POST})

export const  updateNewPostTextActionCreator = (text) =>
    ({ type: UPDATE_NEW_POST_TEXT, newText: text})

export const sendMessageCreator  = () =>({type: SEND_MESSAG})

export const updateNewMessageBodyCreator = (text) =>
    ({ type: UPDATE_NEW_MESSAGES_BODY, body: text})

*/
export default store;

window.store = store;

