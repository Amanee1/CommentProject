import React, {Component} from 'react';
import firebase from 'firebase';
/*var config = {
  apiKey: "AIzaSyAGOVsk_-QAN7PfsoRHsdXjKHzewwuiDeE",
  authDomain: "commentproject-7678c.firebaseapp.com",
  databaseURL: "https://commentproject-7678c.firebaseio.com",
  projectId: "commentproject-7678c",
  storageBucket: "commentproject-7678c.appspot.com",
  messagingSenderId: "102189189175"
};
firebase.initializeApp(config);*/
const auth = firebase.auth
const provider = new firebase.auth.FacebookAuthProvider();
class Header extends Component {
  constructor(props){
    super(props);
    this.state = {user:null}
  }
  login = () => {
    var that = this;
    const result = auth().signInWithPopup(provider).then(function(result) {
      var user = result.user;
      console.log(user);
      that.setState({user: user});
    }).catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
    });
  }
  logout = () => {
    var that = this;
    auth().signOut().then(function() {
      that.setState({user: null});
    }).catch(function(error) {
    });
  }
  renderName = () => {
    const {user} = this.state
    if(user)
      return (<div>{}{user ? `คุณกำลังเข้าใช้งานด้วยบัญชี ${user.displayName}` : 'Hi!'}</div>)
  }
  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
        <div>{this.renderName()}</div>
          <a className="navbar-item">
            {this.props.title}
            
            <button onClick={this.login}>
              Login with Facebook
            </button>
            <button onClick={this.logout}>
              Logout
            </button>
          </a>
        </div>
      </nav>
    )
  }
}
export default Header