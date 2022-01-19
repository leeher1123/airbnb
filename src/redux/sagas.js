import { fork, all } from 'redux-saga/effects';

import sharedSaga from '../views/shared/redux/saga';

function* sagas() {
  yield all([
    fork(sharedSaga),
  ]);
}

export default sagas;
