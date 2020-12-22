import { action, makeObservable, observable } from 'mobx';

import { RootStore } from './rootStore';

export interface VehicleMake {
  ID: number;
  name: string;
  abrv: string;
}

export interface VehicleModel {
  ID: number;
  name: string;
  makeID: number;
  abrv: string;
  price: number;
}

const initalMakesState: VehicleMake[] = [
  { ID: 1, name: 'Abarth', abrv: 'ABAR' },
  { ID: 2, name: 'AC Cobra', abrv: 'COBR' },
  { ID: 3, name: 'Acura', abrv: 'ACUR' },
  { ID: 4, name: 'Alfa Romeo', abrv: 'ALFA' },
  { ID: 5, name: 'Alpine', abrv: 'ALPI' },
  { ID: 6, name: 'Aston Martin', abrv: 'ASTO' },
  { ID: 7, name: 'Bentley', abrv: 'BENT' },
  { ID: 8, name: 'Bayerische Motoren Werke', abrv: 'BMW' },
  { ID: 9, name: 'Bugatti', abrv: 'BUGA' },
  { ID: 10, name: 'Buick', abrv: 'BUIC' },
  { ID: 11, name: 'Cadillac', abrv: 'CADI' },
  { ID: 12, name: 'Chevrolet', abrv: 'CHEV' },
  { ID: 13, name: 'Chrysler', abrv: 'CHRY' },
  { ID: 14, name: 'Citroen', abrv: 'CITR' },
  { ID: 15, name: 'Daewoo', abrv: 'DAEW' },
  { ID: 16, name: 'Daihatsu', abrv: 'DAIH' },
  { ID: 17, name: 'De Lorean', abrv: 'DELO' },
  { ID: 18, name: 'Dodge', abrv: 'DODG' },
  { ID: 19, name: 'Ford', abrv: 'FORD' },
  { ID: 20, name: 'Isuzu', abrv: 'ISU' },
  { ID: 21, name: 'Jaguar', abrv: 'JAGU' },
  { ID: 22, name: 'Kawasaki', abrv: 'KAWA' },
  { ID: 23, name: 'Lamborghini', abrv: 'LAMO' },
  { ID: 24, name: 'Lancia', abrv: 'LNCI' },
  { ID: 25, name: 'Lincoln', abrv: 'LINC' },
  { ID: 26, name: 'Lotus', abrv: 'LOTU' },
  { ID: 27, name: 'Maserati', abrv: 'MASE' },
  { ID: 28, name: 'Mercedes-Benz', abrv: 'MERZ' },
  { ID: 29, name: 'Mitsubishi', abrv: 'MITS' },
  { ID: 30, name: 'Nissan', abrv: 'NISS' },
  { ID: 31, name: 'Opel', abrv: 'OPEL' },
  { ID: 32, name: 'Peugeot', abrv: 'PEUG' },
  { ID: 33, name: 'Renault', abrv: 'RENA' },
  { ID: 34, name: 'Saab', abrv: 'SAA' },
  { ID: 35, name: 'Scania', abrv: 'SCAN' },
  { ID: 36, name: 'Skoda', abrv: 'SKOD' },
  { ID: 37, name: 'Suzuki', abrv: 'SUZI' },
  { ID: 38, name: 'Toyota', abrv: 'TOYT' },
  { ID: 39, name: 'Triumph', abrv: 'TRIU' },
  { ID: 40, name: 'Vauxhall', abrv: 'VAUX' },
  { ID: 41, name: 'Volkswagen', abrv: 'VOLK' },
  { ID: 42, name: 'Yamaha', abrv: 'YAMA' },
];

const initalModelsState: VehicleModel[] = [
  { ID: 1, name: '508 SW', makeID: 32, abrv: 'PEUG', price: 22000 },
  { ID: 2, name: '508', makeID: 32, abrv: 'PEUG', price: 20000 },
  { ID: 3, name: '308 SW', makeID: 32, abrv: 'PEUG', price: 18000 },
  { ID: 4, name: '308', makeID: 32, abrv: 'PEUG', price: 16000 },
  { ID: 5, name: '3008', makeID: 32, abrv: 'PEUG', price: 26000 },
  { ID: 6, name: '5008', makeID: 32, abrv: 'PEUG', price: 28000 },
  { ID: 7, name: '4C', makeID: 4, abrv: 'ALFA', price: 38000 },
];

export class VehiclesStore {
  rootStore;
  makes = initalMakesState;
  models = initalModelsState;

  constructor(rootStore: RootStore) {
    makeObservable(this, {
      makes: observable,
      models: observable,
      addMake: action,
      editMake: action,
      removeMake: action,
      addModel: action,
      removeModel: action,
    });
    this.rootStore = rootStore;
  }

  addMake(name: string, abrv: string) {
    let currentLargestMakeID = Math.max(...this.makes.map((make) => make.ID));
    if (!currentLargestMakeID) currentLargestMakeID = 0;
    this.makes.push({ ID: currentLargestMakeID + 1, name, abrv });
  }

  editMake(ID: number, name: string, abrv: string) {
    const index = this.makes.findIndex((make) => make.ID === ID);
    if (index >= 0) {
      this.makes[index] = {
        ID,
        name,
        abrv,
      };
    }
  }

  removeAllModelsOfMake(ID: number) {
    const newModelsList = this.models.filter((model) => model.makeID !== ID);
    this.models = [...newModelsList];
  }

  removeMake(ID: number) {
    this.removeAllModelsOfMake(ID);

    const index = this.makes.findIndex((make) => make.ID === ID);
    if (index >= 0) this.makes.splice(index, 1);
  }

  addModel(name: string, makeID: number, price: number) {
    const { abrv } = this.makes.filter((make) => make.ID === makeID)[0];
    let currentLargestModelID = Math.max(
      ...this.models.map((model) => model.ID)
    );
    if (!currentLargestModelID) currentLargestModelID = 0;
    this.models.push({
      ID: currentLargestModelID + 1,
      name,
      makeID,
      abrv,
      price,
    });
  }

  removeModel(ID: number) {
    const index = this.models.findIndex((model) => model.ID === ID);
    if (index >= 0) this.models.splice(index, 1);
  }
}
