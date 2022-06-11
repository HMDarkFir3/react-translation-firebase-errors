export function translationFirebaseErrorsEN(error) {
  switch (error) {
    case "auth/app-not-authorized":
      return "This application, identified by the domain where it is hosted, is not authorized to use Firebase Authentication with the provided API key.";

    //1

    case "auth/app-not-installed":
      return "The requested mobile app corresponding to the identifier (Android package name or iOS package ID) provided is not installed on this device.";

    //2

    case "auth/cordova-not-ready":
      return "The Cordova framework is not ready.";

    //3

    case "auth/cors-unsupported":
      return "This browser is not supported.";

    //4

    case "auth/credential-already-in-use":
      return "This credential is already associated with a different user account.";

    //5

    case "auth/custom-token-mismatch":
      return "The custom token corresponds to a different audience.";

    //6

    case "auth/requires-recent-login":
      return "This operation is sensitive and requires recent authentication. Log in again before retrying this request.";

    //7

    case "auth/dynamic-link-not-activated":
      return "Enable dynamic links in firebase console and agree to terms and conditions.";

    //8

    case "auth/email-already-in-use":
      return "The email address is already in use by another account.";

    //9

    case "auth/expired-action-code":
      return "The action code has expired.";

    //10

    case "auth/cancelled-popup-request":
      return "This operation was canceled due to another conflicting popup being opened.";

    //11

    case "auth/internal-error":
      return "An internal error has occurred.";

    //12

    case "auth/invalid-app-id":
      return "The mobile app identifier is not registered for the current project.";

    //13

    case "auth/invalid-user-token":
      return "The user's credential is no longer valid. You must sign in again.";

    //14

    case "auth/invalid-auth-event":
      return "An internal error has occurred.";

    //15

    case "auth/invalid-verification-code":
      return "The verification SMS code used to create the authorization credential is invalid. Please resubmit the code and be sure to use the code provided by the user.";

    //16

    case "auth/invalid-cordova-configuration":
      return "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappflugin-inapbrowser and cordova-plugin-customurlscheme.";

    //17

    case "auth/invalid-custom-token":
      return "The custom token format is incorrect. Please check the documentation.";

    //18

    case "auth/invalid-email":
      return "The email address is bad formatted.";

    //19

    case "auth/invalid-api-key":
      return "Your API key is invalid, please make sure you copied it correctly.";

    //20

    case "auth/invalid-credential":
      return "The provided automatic credential is bad formatted or has expired.";

    //21

    case "auth/invalid-message-payload":
      return "The email template corresponding to this action contains invalid characters in your message. Please fix it for the Auth email templates section in the Firebase Console.";

    //22

    case "auth/invalid-oauth-provider":
      return "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.";

    //23

    case "auth/unauthorized-domain":
      return "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains in the Firebase console.";

    //24

    case "auth/invalid-action-code":
      return "Action code is invalid. This can happen if the code is malformed, expires or has already been used.";

    //25

    case "auth/wrong-password":
      return "The password is invalid or the user does not have a password.";

    //26

    case "auth/invalid-recipient-email":
      return "The email corresponding to this action did not send as the recipient email address provided is invalid.";

    //27

    case "auth/invalid-sender":
      return "The email template corresponding to this action contains an invalid sender email or name. Please fix this by going to the Auth email templates section in the Firebase Console.";

    //28

    case "auth/invalid-verification-id":
      return "Verifier ID used to create authorization credential is invalid.";

    //29

    case "auth/missing-iframe-start":
      return "An internal error has occurred.";

    //30

    case "auth/auth-domain-config-required":
      return "Be sure to include authDomain when calling Firebase. initializeApp(), following the instructions in the Firebase console.";

    //31

    case "auth/missing-app-credential":
      return "The phone verification request is missing an app verifier claim. A reCAPTCHA response token needs to be provided.";

    //32

    case "auth/missing-verification-code":
      return "The phone's authentication credential was created with an empty SMS verification code.";

    //33

    case "auth/missing-verification-id":
      return "The phone's authentication credential was created with an empty verification ID.";

    //34

    case "auth/app-deleted":
      return "This FirebaseApp instance has been deleted.";

    //35

    case "auth/account-exists-with-different-credential":
      return "An account already exists with the same email address but different login credentials.";

    //36

    case "auth/network-request-failed":
      return "A network error has occurred (such as timeout, connection broken, or host unreachable).";

    //37

    case "auth/no-auth-event":
      return "An internal error has occurred.";

    //38

    case "auth/no-such-provider":
      return "User has not been linked to an account with the provided provider.";

    //39

    case "auth/operation-not-allowed":
      return "Provided provider is disabled for this Firebase project. Enable it in the Firebase console, in the login method tab of the Auth section.";

    //40

    case "auth/operation-not-supported-in-this-environment":
      return 'This operation is not supported in the environment in which this application is running. The "location.protocol" must be http, https or chrome-extension and web storage must be enabled.';

    //41

    case "auth/popup-blocked":
      return "Unable to establish a connection to the popup. It may have been blocked by the browser.";

    //42

    case "auth/popup-closed-by-user":
      return "The popup was closed by the user before completing the operation.";

    //43

    case "auth/provider-already-linked":
      return "The user can only be bound to one identity for the given provider.";

    //44

    case 'auth/quota-exceeded": ':
      return "The project quota for this operation has been exceeded.";

    //45

    case "auth/redirect-cancelled-by-user":
      return "The redirect operation was canceled by the user before ending.";

    //46

    case "auth/redirect-operation-pending":
      return "The login redirect operation is already pending.";

    //47

    case "auth/timeout":
      return "The operation has expired";

    //48

    case "auth/user-token-expired":
      return "The user's credential is no longer valid. The user must login again.";

    //49

    case "auth/too-many-requests":
      return "We block all requests from this device due to unusual activity. Try again later.";

    //50

    case "auth/user-cancelled":
      return "The user did not grant your request the permissions you requested.";

    //51

    case "auth/user-not-found":
      return "There is no user record corresponding to this identifier. The user may have been deleted.";

    //52

    case "auth/user-disabled":
      return "The user account has been disabled by an administrator.";

    //53

    case "auth/user-mismatch":
      return "The credentials provided do not correspond to the previously registered user.";

    //54

    case "auth/user-signed-out":
      return "User logged out.";

    //55

    case "auth/weak-password":
      return "The password must be 6 characters or more.";
    //56

    case "auth/web-storage-unsupported":
      return "This browser is not supported or third-party cookies and data may be disabled.";

    //57

    case "auth/captcha-check-failed":
      return "The reCAPTCHA response token is invalid, expired, already in use, or the domain associated with it does not match the list of authorized domains.";

    //58

    case "auth/code-expired":
      return "The SMS code has expired. Please resend the verification code to try again.";

    //59

    case "auth/invalid-app-credential":
      return "The phone verification request contains an invalid verification application. The reCAPTCHA response token is invalid or expired.";

    //60

    default:
      return "An internal error has occurred.";

    //61
  }
}
