import { takeLatest, put, call } from "redux-saga/effects";
import { LOAD_DATA, putData } from "./actions/auth";

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return await response.json();
}

function* workerLoadData() {
  const data = yield call(fetchData);

  yield put(putData(data));
}
export function* watchLoadData() {
  yield takeLatest(LOAD_DATA, workerLoadData);
}
