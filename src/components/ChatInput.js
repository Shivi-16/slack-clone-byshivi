import React, { useRef, useState } from 'react'
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { db } from "../firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

function ChatInput({channelName, channelId}) {
    const [input, setInput] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        
        if(!channelId){
            return false;
        }
        db.collection("room").doc(channelId).collection("messages").add({
            message:input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            user: 'Shivank Rastogi',    
            userImage: 'https://media-exp1.licdn.com/dms/image/C4E03AQFf8UNqDyt33w/profile-displayphoto-shrink_400_400/0/1537451311084?e=1668038400&v=beta&t=wAnl399JX0EkOoDGX31o_57qtjoMAnSZhTbTkne8IcI'

        });
        setInput("");

        
    };
 return <ChatInputContainer>
    <form>
        <input value={input}
        onChange={(e) => setInput(e.target.value)}
         placeholder={`Message #${channelName}`}
          />
        <Button hidden type='submit' onClick={sendMessage}>
            SEND
        </Button>
    </form>
 </ChatInputContainer>
}

export default ChatInput;

const ChatInputContainer = styled.div`
border-radius: 20px;

> form{
    position: relative;
    display: flex;
    justify-content: center;
}
>form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
}
>form > button{
    display: none !important;
}
`;
