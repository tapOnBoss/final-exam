import logo from './logo.svg';
import './App.css';

// login logout BTN`s
import LoginButton from './components/login';
import LogoutButton from './components/logout';

// reacto ir google api
import { usEffect } from 'react';
import { gapi } from ' gapi-script';

// client id must for google login in this cse its web client 1, I also have web client 2.
const clientId = '285890110099-h3ttpmjmv43t06gon92oursjvu3rffil.apps.googleusercontent.com ';

function App() {

// login logout client
  useEffect(() => {
    function start() {

      gapi.client.init({
        clientId: clientId,
      // scope keisis jei bus naudojami kiti api
      scope: ''})
    };
    gapi.load('client:auth2', start);
});
/* jei naudojami kiti api ir reikia accessToken
var acessToken = gapi.auth.getToken().access_token;
*/
  // visas appas
  /* login ir log out user is kart po <div classname = ' App '> login ir logout </ div > */
  return (
    <div className="App">

      <loginButton />
      <logoutButton />

    </div>
  );
}

export default App;
