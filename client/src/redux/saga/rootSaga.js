import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsStart } from './shopSagas';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}