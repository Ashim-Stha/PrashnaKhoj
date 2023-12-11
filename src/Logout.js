import { GoogleLogout } from "react-google-login";

const clientId =
  "1075111422641-fbhrcvc9ufrqrs9v91cghsr7qs7qrop6.apps.googleusercontent.com";

const onSuccess = () => {
  console.log("Logout Successful");
};

export default function Logout() {
  return (
    <div id="signOutButton">
      <GoogleLogout
        clientId={clientId}
        buttonText={"Logout"}
        onLogoutSuccess={onSuccess}
      />
    </div>
  );
}
