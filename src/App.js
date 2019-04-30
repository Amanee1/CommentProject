import React, { Component } from 'react';
import Header from '../src/components/Header';
import MessageList from './components/MessageList';
import MessageBox from './components/MessageBox';
import firebase from 'firebase';

class App extends Component {
  constructor(props){
  super(props);
  var config = {
    apiKey: "AIzaSyAGOVsk_-QAN7PfsoRHsdXjKHzewwuiDeE",
    authDomain: "commentproject-7678c.firebaseapp.com",
    databaseURL: "https://commentproject-7678c.firebaseio.com",
    projectId: "commentproject-7678c",
    storageBucket: "commentproject-7678c.appspot.com",
    messagingSenderId: "102189189175"
  };
  firebase.initializeApp(config);
}

render() {
  return (
    <div className="container">
      <div className="container">
        <Header/>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageList db={firebase} />
        </div>
      </div>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-6">
          <MessageBox db={firebase} />
        </div>
      </div>
    </div>
  );
 }
}
export default App;