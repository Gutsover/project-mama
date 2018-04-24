import firebase from "firebase/app";
import firestore from "firebase/firestore";

import config from "../../constantes/firebase-config";

export default class ThemeService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }

  async setTheme(actual) {
    this.db
      .collection("theme")
      .doc("colors")
      .set({
        actual: actual
      })
      .then(function() {
        console.log("Document successfully written!");
      })
      .catch(function(error) {
        console.error("Error writing document: ", error);
      });
  }

  async getTheme() {
    const themeRef = this.db.collection("theme");
    let theme = [];

    try {
      const themeSnapshot = await themeRef.get();

      themeSnapshot.forEach(doc => {
        theme = doc.data();

        return theme;
      });

      return theme;
    } catch (err) {
      console.log("Error getting documents", err);
      return;
    }
  }
}
