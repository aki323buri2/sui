import { put, call, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import bukaSaga from './bukaSaga.js';
import tmasaSaga from './tmasaSaga.js';
export default function *mainSaga()
{
	yield fork(bukaSaga);
	yield fork(tmasaSaga);

	yield put({ type: 'SYOZOK', payload: 160 });
	yield put({ type: 'TOKUNO', payload: [ 16509,16511,16512,16518 ] });
};