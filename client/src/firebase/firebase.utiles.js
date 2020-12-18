import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBw786oY8KPF7z7ydW_yiE6qbOBw5Ilb9g",
    authDomain: "crwn-db-4b1ea.firebaseapp.com",
    databaseURL: "https://crwn-db-4b1ea.firebaseio.com",
    projectId: "crwn-db-4b1ea",
    storageBucket: "crwn-db-4b1ea.appspot.com",
    messagingSenderId: "988159248160",
    appId: "1:988159248160:web:6c16b857f2bbdde1927945",
    measurementId: "G-8VQBY03T16"
  };

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`); // creating, getting, updating or deleting
  const snapShot = await userRef.get();  // represet data

  if(!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdDate = new Date();

   try {
      await userRef.set({
      displayName,
      email,
      createdDate,
      ...additionalData
    })
   } catch (error) {
     console.log('error creating user', error.message);
   }
  }
  return userRef;
}

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'}); 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
