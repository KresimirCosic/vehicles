import firebase from 'firebase';

import { rootStore } from '../mobx/stores/rootStore';
import { MakeDataResponse, ModelDataResponse } from '../constants/firebase';

export class VehiclesService {
  // Fetching of makes from Firestore
  getMakes() {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .get()
      .then((response) => {
        vehiclesStore.completeMakesInitialFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, abrv } = doc.data() as MakeDataResponse;
          vehiclesStore.addMake(id, name, abrv);
        });

        userInterfaceStore.turnLoaderOff();
      });
  }

  // Creating a make in Firestore
  createMake(name: string, abrv: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .add({
        name,
        abrv,
      })
      .then((response) => {
        const { id } = response;
        vehiclesStore.addMake(id, name, abrv);
        userInterfaceStore.turnLoaderOff();
      });
  }

  // Editing a make in Firestore
  editMake(ID: string, name: string, abrv: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .update({
        name,
        abrv,
      })
      .then(() => {
        vehiclesStore.editMake(ID, name, abrv);
        userInterfaceStore.turnLoaderOff();
      });
  }

  // Deleting a make from Firestore (also deletes all models related to the make from Firestore)
  deleteMake(ID: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('makes')
      .doc(ID)
      .delete()
      .then(() => {
        firebase
          .firestore()
          .collection('models')
          .where('makeID', '==', ID)
          .get()
          .then((querySnapshot) => {
            // Deleting all models related to the make being deleted
            const batch = firebase.firestore().batch();

            querySnapshot.forEach((doc) => batch.delete(doc.ref));

            return batch.commit();
          })
          .then(() => {
            vehiclesStore.removeMake(ID);
            userInterfaceStore.turnLoaderOff();
          });
      });
  }

  // Fetching of models from Firestore
  getModels() {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .get()
      .then((response) => {
        vehiclesStore.completeModelsInitalFetch();

        response.forEach((doc) => {
          const { id } = doc;
          const { name, makeID, price } = doc.data() as ModelDataResponse;
          vehiclesStore.addModel(id, name, makeID, price);
        });

        userInterfaceStore.turnLoaderOff();
      });
  }

  // Creating a model in Firebase
  createModel(name: string, makeID: string, price: number) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

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
        vehiclesStore.addModel(id, name, makeID, price);
        userInterfaceStore.turnLoaderOff();
      });
  }

  // Editing a model in Firebase
  editModel(ID: string, name: string, price: number) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .update({
        name,
        price,
      })
      .then(() => {
        vehiclesStore.editModel(ID, name, price);
        userInterfaceStore.turnLoaderOff();
      });
  }

  // Deleting a model from Firebase
  deleteModel(ID: string) {
    const { vehiclesStore, userInterfaceStore } = rootStore;
    userInterfaceStore.turnLoaderOn();

    firebase
      .firestore()
      .collection('models')
      .doc(ID)
      .delete()
      .then(() => {
        vehiclesStore.removeModel(ID);
        userInterfaceStore.turnLoaderOff();
      });
  }
}

export const vehiclesService = new VehiclesService();
