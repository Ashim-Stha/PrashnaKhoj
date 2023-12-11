import { GoogleLogin } from "react-google-login";

const clientId =
  "1075111422641-fbhrcvc9ufrqrs9v91cghsr7qs7qrop6.apps.googleusercontent.com";

const onSuccess = (res) => {
  console.log(`Login success! current user:`, res.profileObj);
};

const onFailure = (res) => {
  console.log(res);
};

export default function Login() {
  return (
    <div id="signInButton">
      <GoogleLogin
        clientId={clientId}
        buttonText={"Login"}
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </div>
  );
}
