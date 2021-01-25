import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';

interface UserData extends firebase.firestore.DocumentData {
  admin: boolean;
}

export class AuthenticationService {
  login(email: string, password: string) {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          const { uid, email } = response.user;
          const docRef = firebase
            .firestore()
            .collection('users')
            .doc(uid)
            .get();
          docRef.then((doc) => {
            const { admin } = doc.data() as UserData;
            rootStore.authenticationStore.setUser(uid, email, admin);
          });
        }
      });
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        rootStore.authenticationStore.removeUser();
      });
  }

  register(email: string, password: string, admin: boolean) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        if (response.user) {
          const { uid, email } = response.user;
          firebase
            .firestore()
            .collection('users')
            .doc(uid)
            .set({
              admin,
            })
            .then(() => {
              rootStore.authenticationStore.setUser(uid, email, admin);
            });
        }
      });
  }
}

export const authenticationService = new AuthenticationService();
