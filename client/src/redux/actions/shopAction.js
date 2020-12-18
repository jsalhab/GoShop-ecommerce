import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTION_ITEM, FETCH_COLLECTION_ITEM_FAILURE} from "../actions/types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utiles";


let collections = null;

export const fetchCollectionsStart = () => {
  return {
    type: FETCH_COLLECTIONS_START
  }
}

 
export const fetchCollections = () => async dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch({type: FETCH_COLLECTIONS_START})
    collectionRef.get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      collections = collectionsMap;
      dispatch({type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap})
    })
    .catch(error => {
        dispatch({type: FETCH_COLLECTIONS_FAILURE, payload: error.message})
    })
};

export const fetchCollectionItem = (collectionId, itemId) => async dispatch => {

  const collectionRef = firestore.collection("collections");
    collectionRef.get()
    .then((snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      const items = collectionsMap[collectionId].items;
      let data = null;

      items.forEach(item => {
        if(item.id == itemId) {
          data = item;
        }
      })
    
      dispatch({type: FETCH_COLLECTION_ITEM, payload: data})
    })
    .catch(error => {
        dispatch({type: FETCH_COLLECTION_ITEM_FAILURE, payload: error.message})
    })
        
};