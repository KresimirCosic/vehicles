import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';
import { MakeDataResponse, ModelDataResponse } from '../constants/firebase';

export class VehiclesService {
  getMakes() {
    firebase
      .firestore()
      .collection('makes')
      .get()
      .then((response) => {
        rootStore.vehiclesStore.completeMakesInitialFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, abrv } = doc.data() as MakeDataResponse;
          rootStore.vehiclesStore.addMake(id, name, abrv);
        });
      });
  }

  createMake(name: string, abrv: string) {
    firebase
      .firestore()
      .collection('makes')
      .add({
        name,
        abrv,
      })
      .then((response) => {
        const { id } = response;
        rootStore.vehiclesStore.addMake(id, name, abrv);
      });
  }

  editMake(ID: string, name: string, abrv: string) {
    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .update({
        name,
        abrv,
      })
      .then(() => {
        rootStore.vehiclesStore.editMake(ID, name, abrv);
      });
  }

  deleteMake(ID: string) {
    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .delete()
      .then(() => {
        rootStore.vehiclesStore.removeMake(ID);
      });

    firebase
      .firestore()
      .collection('models')
      .where('makeID', '==', ID)
      .get()
      .then((querySnapshot) => {
        const batch = firebase.firestore().batch();

        querySnapshot.forEach((doc) => batch.delete(doc.ref));

        return batch.commit();
      });
  }

  getModels() {
    firebase
      .firestore()
      .collection('models')
      .get()
      .then((response) => {
        rootStore.vehiclesStore.completeModelsInitalFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, makeID, price } = doc.data() as ModelDataResponse;
          console.log(id, name, makeID, price);
          rootStore.vehiclesStore.addModel(id, name, makeID, price);
        });
      });
  }

  createModel(name: string, makeID: string, price: number) {
    firebase
      .firestore()
      .collection('models')
      .add({
        name,
        makeID,
        price,
      })
      .then((response) => {
        const { id } = response;
        rootStore.vehiclesStore.addModel(id, name, makeID, price);
      });
  }

  editModel(ID: string, name: string, price: number) {
    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .update({
        name,
        price,
      })
      .then(() => {
        rootStore.vehiclesStore.editModel(ID, name, price);
      });
  }

  deleteModel(ID: string) {
    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .delete()
      .then(() => {
        rootStore.vehiclesStore.removeModel(ID);
      });
  }
}

export const vehiclesService = new VehiclesService();
