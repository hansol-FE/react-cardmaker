import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService{
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseApp.auth().signInWithPopup(authProvider);
  }

  onAuthChange(onUserCanged) {
    firebase.auth().onAuthStateChanged(user=>{
      onUserCanged(user);
    })
  }

  logout() {
    firebase.auth().signOut();
  }

}

export default AuthService;