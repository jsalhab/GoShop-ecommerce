import {takeEvery, call, put} from "redux-saga/effects";
import { FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILURE} from "../actions/types";
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utiles";

export function* fetchCollectionsAsync() {
    
    try {
        const collectionRef = firestore.collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);
        yield put({type: FETCH_COLLECTIONS_SUCCESS, payload: collectionsMap}) 
    } catch (error) {
        yield put({type: FETCH_COLLECTIONS_FAILURE, payload: error.message}) 
    }
}

export function* onFetchCollectionsStart() {
    yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}
