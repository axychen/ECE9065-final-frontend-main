import React, { Component } from 'react';
import Login from '../components/login'
import UnauthenUserSection from '../components/unauthenUserSection';
import AuthenUserSection from '../components/authenUserSection';


export default class MainPage extends Component {
  render() {

    return (
      <div>
         <h1 id="app-name"> Welcome to Song Finder</h1>
         <Login></Login>
         <a href="/signup">go to signup</a>
         <div>
            <p>Here is a website that you can search songs and related information like lyrics, artists, and album. <br/>
              You can also create and modify your favourite song lists.  <br/>
              Try the functions below and log in if you wanna access more functionalities.  <br/>
              Enjoy! </p>
         </div>
         <UnauthenUserSection></UnauthenUserSection>
         <AuthenUserSection></AuthenUserSection>
       

       
      </div>
    )
  }
}