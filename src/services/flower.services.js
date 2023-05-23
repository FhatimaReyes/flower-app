import firebase from "../firebase";

const db = firebase.collection("/flowers");

class FlowerDataService {
  getAll() {
    return db;
  }

  create(flower) {
    return db.add(flower);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

// eslint-disable-next-line 
export default new FlowerDataService();