import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import fire from './fire';
import './App.css';
import { Tracker } from './components/Tracker';
import { Logsign } from "./components/Logsign";

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const Login = () => {
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const message = errorMessage.split(":");
        const message2 = message[1].split("(");
        setError(message2[0]);
      });
  }

  const signup = () =>{
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const message = errorMessage.split(":");
        const message2 = message[1].split("(");
        setError(message2[0]);
      });
  }

  const authListener = () => {
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
          setUser(user);
      }
      else{
        setUser("");
      }
    });
  }

  useEffect(() => {
    authListener();
  }, [user]);

  const track = () => {
    
    finder();
    setInterval(()=>{
      finder();    
    },5000);
  }
  let [latitude, setLatitude] = useState('');
  let [longitude, setLongitude] = useState('');
  let [accuracy, setAccuracy] = useState('');
  const finder = () => {
    if(!navigator.geolocation){
      console.log("your browser doesnot support geolocation feature!");
    }
    else{
      navigator.geolocation.getCurrentPosition(getPosition);
    }
    function getPosition(position){
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        accuracy = position.coords.accuracy;
        let username = user.email.split("@"); 
        username = username[0].split('.');
        // console.log(fire.database().ref());
        
        fire.database().ref(username[0]).update({
            latitude: latitude,
            longitude: longitude,
            accuracy: accuracy
        });
    }
  }
  
  
  

  return (
    <>
    { user ? (
        <Tracker 
          track={track}
        />
      ):(
        <Logsign 
          email={email} 
          setEmail={setEmail} 
          password={password}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          setPassword={setPassword} 
          Login={Login}
          signup={signup}
          error={error}
        />
      )
    }
      
    </>
  );
}

export default App;
