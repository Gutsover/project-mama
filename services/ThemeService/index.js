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

  async getTheme() {
    const themeRef = this.db.collection("theme");
    let theme = [];

    try {
      const themeRef = await themeRef.get();

      themeRef.forEach(doc => {
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
