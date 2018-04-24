import firebase from "firebase/app";
import firestore from "firebase/firestore";

import config from "../../constantes/firebase-config";

export default class NewsService {
  constructor() {
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    this.db = firebase.firestore();
  }

  async getNews() {
    const newsRef = this.db.collection("news");
    let news = [];

    try {
      const newsData = await newsRef.get();

      newsData.forEach(doc => {
        news = doc.data();
        return news;
      });

      return news;
    } catch (err) {
      console.log("Error getting documents", err);
      return;
    }
  }
}
