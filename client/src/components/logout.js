import { GoogleLogin } from 'react-google-login';

const clientId = '285890110099-h3ttpmjmv43t06gon92oursjvu3rffil.apps.googleusercontent.com ';

function Logout() {

    return(
            <div id="signOutButton">
                <GoogleLogout
                    clientId={clientId}
                    buttonText={"Logout"}
                    onLogoutSuccess={onLogoutSuccess}
                />
            </div>
    )
}

export default Logout;