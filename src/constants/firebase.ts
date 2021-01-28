import firebase from 'firebase';

export const configuration = {
  apiKey: 'AIzaSyC-5kVPpHSdoACxfI9lxQeA8LY-2eHRyLc',
  authDomain: 'vehicles-f7196.firebaseapp.com',
  databaseURL:
    'https://vehicles-f7196-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vehicles-f7196',
  storageBucket: 'vehicles-f7196.appspot.com',
  messagingSenderId: '1074186599691',
  appId: '1:1074186599691:web:ade009fac309ae8633760e',
  measurementId: 'G-9DC44NC74M',
};

export interface UserDataResponse extends firebase.firestore.DocumentData {
  admin: boolean;
}

export interface MakeDataResponse extends firebase.firestore.DocumentData {
  name: string;
  abrv: string;
}

export interface ModelDataResponse extends firebase.firestore.DocumentData {
  name: string;
  makeID: string;
  price: number;
}
