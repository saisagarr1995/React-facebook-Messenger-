import React, {useEffect, useState} from 'react';
import {  FormControl,  Input  } from '@material-ui/core';
import './App.css';
import Message from './Message';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {
  //Declaring state(Its is a short term memory- It keep track of what we typing)
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]); //This is for storing the messages
  // console.log(messages)
  const [username, setUsername] = useState('');
  //useState is variable in React
  //useEffect runs code on the condition in React

  useEffect(() => {
    //runs once when the app component Loads
    db.collection('messages')
      .orderBy('timestamp','desc')
      .onSnapshot(snapshot => {
        setMessages(snapshot.docs.map(doc => ({
          id: doc.id ,message: doc.data()})))
      })

  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name')) 
  }, [])
  
  const sendMessage = (event) =>{
    // We make all the logic to send the message here.
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" alt="Facebook Logo"></img>
      <h1>Facebook Messenger Clone🔥</h1>  
      <h2>Welcome to chat room {`:${username.toUpperCase()}`} </h2> 

       {/*1.Every basic chat app has some INPUT FIELD*/} 
       {/*2.We Have Input Button (Sends message) */}
       {/*3.Messages them selves listed out*/}
       <form className="app__form">
        <FormControl className="app__formControl">
            {/* <InputLabel disabled={!input}>Enter a message...</InputLabel> */}
            <Input className="app__input" placeholder='Enter a message...' value = {input} onChange={event => setInput(event.target.value)}/>
            <IconButton className="app__iconButton" disabled={!input} variant='contained' color='primary' type='submit' onClick={sendMessage}>
                <SendIcon/>
            </IconButton>
        </FormControl>        
       </form>
       
       <FlipMove>
          {  
              messages.map(({id, message}) => (
                <Message key={id} username={username} message={message}/>
              ))   //text we mentioned next to message is PROPERTY.We pass that text property to Message.js file
          }
       </FlipMove>

    </div>
  );
}

export default App;
