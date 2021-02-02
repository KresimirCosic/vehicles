import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';
import { UserDataResponse } from '../constants/firebase';

export class AuthenticationService {
  // Logging a user in via Firebase Authentication
  login(email: string, password: string) {
    const { authenticationStore, userInterfaceStore } = rootStore;

    userInterfaceStore.turnLoaderOn();

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
            const { admin } = doc.data() as UserDataResponse;
            authenticationStore.setUser(uid, email, admin);

            userInterfaceStore.turnLoaderOff();
          });
        }
      });
  }

  // Logging a user out via Firebase Authentication
  logout() {
    const { authenticationStore, userInterfaceStore } = rootStore;

    userInterfaceStore.turnLoaderOn();

    firebase
      .auth()
      .signOut()
      .then(() => {
        authenticationStore.removeUser();

        userInterfaceStore.turnLoaderOff();
      });
  }

  // Registering a user (and subsequently logging him in as well) via Firebase Authentication
  register(email: string, password: string, admin: boolean) {
    const { authenticationStore, userInterfaceStore } = rootStore;

    userInterfaceStore.turnLoaderOn();

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
              authenticationStore.setUser(uid, email, admin);

              userInterfaceStore.turnLoaderOff();
            });
        }
      });
  }
}

export const authenticationService = new AuthenticationService();
