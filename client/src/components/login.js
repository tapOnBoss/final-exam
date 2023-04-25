import { GoogleLogin } from 'react-google-login';

const clientId = '285890110099-h3ttpmjmv43t06gon92oursjvu3rffil.apps.googleusercontent.com ';

function Login() {

    const onSuccess = (res) =>{
        console.log('Logged In! Current user:', res.profileobj);
    }
    const onFailure = (res) =>{
        console.log('Wrong Login information! Current user:', res);
    }

    return(
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText='Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
                coockiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;