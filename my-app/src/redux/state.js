import {renderEntireTree} from "../render"

let state = {
    profilePage:{
        posts:[
            {id:1, message:'Hi, how are you?', likesCount: 15, image: "https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
            {id:2, message:"It's my first post", likesCount: 30, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
            {id:3, message:"How a you?", likesCount: 4, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
            {id:4, message:"Can you hear me?", likesCount: 3, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
            {id:5, message:"If someone sees these messages give an answer", likesCount: 0, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"},
            {id:6, message:"Or at least like", likesCount: 1, image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"}
        ]
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
            {id: 8, name: 'Anya'}
        ]
    }
   
}

export let addPost = (PostMessage) => {
    
    let newPost ={
        id: 7,
        message: PostMessage,
        likesCount: 0,
        image:"https://img.cartoongoodies.com/wp-content/uploads/2019/11/Avatar-The-Last-Airbender-Aang-head.png"
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state)
}

export let addMessages = (PropsMessage) => {

    let newMessages ={
        id: 9,
        message: PropsMessage
    };

    let newDialods ={
        id: 9,
        name: "Daria"
    }

    state.dialogsPage.messages.push(newMessages)
    state.dialogsPage.dialogs.push(newDialods)
    renderEntireTree(state)

}

export default state;